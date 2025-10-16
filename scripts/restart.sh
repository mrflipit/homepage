#!/bin/bash

# Restart script for Flipit Home Page project
# Created: $(date)

# Color codes for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Flipit Home Page Server Manager ===${NC}"
echo -e "${CYAN}Starting server management process...${NC}"

# Store PIDs in /tmp with proper permissions
PID_FILE="/tmp/flipit-frontend.pid"

# Check if frontend is already running
check_frontend() {
  if [ -f "$PID_FILE" ]; then
    PID=$(cat "$PID_FILE")
    if ps -p $PID > /dev/null; then
      return 0 # Running
    else
      # Clean up stale PID file
      rm -f "$PID_FILE"
      return 1 # Not running
    fi
  else
    return 1 # Not running
  fi
}

# Start the frontend server
start_frontend() {
  echo -e "${GREEN}Starting frontend server on localhost:4000...${NC}"
  # Start in background and save PID
  npm run dev &
  PID=$!
  echo $PID > "$PID_FILE"
  chmod 600 "$PID_FILE"
  
  # Wait for server to be ready
  echo -e "${YELLOW}Waiting for frontend to be ready...${NC}"
  attempt=0
  max_attempts=30
  
  while [ $attempt -lt $max_attempts ]; do
    if curl -s http://localhost:4000 > /dev/null; then
      echo -e "${GREEN}Frontend is up and running!${NC}"
      echo -e "${BLUE}Open your browser at ${CYAN}http://localhost:4000${NC}"
      return 0
    fi
    
    attempt=$((attempt+1))
    sleep 1
  done
  
  echo -e "${RED}Failed to start frontend server after $max_attempts seconds${NC}"
  echo -e "${YELLOW}Check for errors in the terminal output${NC}"
  return 1
}

# Stop the frontend server
stop_frontend() {
  if [ -f "$PID_FILE" ]; then
    PID=$(cat "$PID_FILE")
    if ps -p $PID > /dev/null; then
      echo -e "${YELLOW}Stopping frontend server (PID: $PID)...${NC}"
      kill $PID
      
      # Wait for process to terminate
      attempt=0
      max_attempts=10
      while [ $attempt -lt $max_attempts ] && ps -p $PID > /dev/null; do
        sleep 1
        attempt=$((attempt+1))
      done
      
      if ps -p $PID > /dev/null; then
        echo -e "${RED}Process didn't terminate gracefully, forcing...${NC}"
        kill -9 $PID
      fi
      
      rm -f "$PID_FILE"
      echo -e "${GREEN}Frontend server stopped${NC}"
    else
      echo -e "${YELLOW}PID file exists but process is not running${NC}"
      rm -f "$PID_FILE"
    fi
  else
    echo -e "${YELLOW}No PID file found, server may not be running${NC}"
  fi
}

# Restart the frontend server
restart_frontend() {
  echo -e "${CYAN}Restarting frontend server...${NC}"
  stop_frontend
  sleep 2
  start_frontend
}

# Main execution
if check_frontend; then
  echo -e "${YELLOW}Frontend server is already running on localhost:4000${NC}"
  echo -e "${YELLOW}Restarting server...${NC}"
  restart_frontend
else
  echo -e "${YELLOW}No running frontend server detected${NC}"
  start_frontend
fi

# Health check
echo -e "${PURPLE}Performing health check...${NC}"
if curl -s http://localhost:4000 > /dev/null; then
  echo -e "${GREEN}Server health check: OK${NC}"
  echo -e "${BLUE}Your application is running at: ${CYAN}http://localhost:4000${NC}"
else
  echo -e "${RED}Server health check: FAILED${NC}"
  echo -e "${RED}Unable to connect to http://localhost:4000${NC}"
  echo -e "${YELLOW}Check the console for errors${NC}"
fi
