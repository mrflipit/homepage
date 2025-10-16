// Minimal Express backend for Flipit
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || getPortFromArg() || 4001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', port, timestamp: new Date().toISOString() });
});

app.listen(port, () => {
   
  console.log(`Backend listening at http://localhost:${port}`);
});

function getPortFromArg() {
  const idx = process.argv.indexOf('--port');
  if (idx !== -1 && process.argv[idx + 1]) {
    return parseInt(process.argv[idx + 1], 10);
  }
  return undefined;
}
