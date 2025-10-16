#!/bin/bash
# restart.sh – Flipit: Robust Server Restart Script
# Ensures frontend (4000) and backend (4001) are managed with health checks, PID safety, and colored output.

set -e

FRONTEND_PORT=4000
BACKEND_PORT=4001
FRONTEND_CMD="npm run dev"
BACKEND_CMD="npm run backend"  # Adjust if your backend uses a different command
FRONTEND_HEALTH="http://localhost:$FRONTEND_PORT/api/health"
BACKEND_HEALTH="http://localhost:$BACKEND_PORT/api/health"
FRONTEND_PID=/tmp/flipit_frontend.pid
BACKEND_PID=/tmp/flipit_backend.pid

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

function color_echo() {
  local color="$1"; shift
  echo -e "${!color}$*${NC}"
}

function kill_if_running() {
  local pidfile="$1"
  if [ -f "$pidfile" ]; then
    local pid=$(cat "$pidfile")
    if ps -p $pid > /dev/null 2>&1; then
      color_echo YELLOW "Killing process $pid from $pidfile..."
      kill $pid
      sleep 1
      if ps -p $pid > /dev/null 2>&1; then
        color_echo RED "Process $pid didn’t die, killing hard!"
        kill -9 $pid
      fi
    fi
    rm -f "$pidfile"
  fi
}

function check_health() {
  local url="$1"
  local label="$2"
  for i in {1..10}; do
    sleep 1
    status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    if [ "$status" = "200" ]; then
      color_echo GREEN "$label healthy at $url"
      return 0
    fi
  done
  color_echo RED "$label failed health check at $url (status: $status)"
  return 1
}

function start_service() {
  local cmd="$1"
  local pidfile="$2"
  local log="$3"
  color_echo BLUE "Starting: $cmd (logging to $log)"
  nohup bash -c "$cmd" > "$log" 2>&1 &
  echo $! > "$pidfile"
  chmod 600 "$pidfile"
}

color_echo BLUE "--- Flipit Restart: $(date) ---"

# Frontend
kill_if_running "$FRONTEND_PID"
start_service "$FRONTEND_CMD" "$FRONTEND_PID" "frontend.log"

# Backend
kill_if_running "$BACKEND_PID"
start_service "$BACKEND_CMD" "$BACKEND_PID" "backend.log"

# Health checks
check_health "$FRONTEND_HEALTH" "Frontend"
check_health "$BACKEND_HEALTH" "Backend"

color_echo GREEN "All servers started!"
echo "Open your browser at http://localhost:$FRONTEND_PORT"
