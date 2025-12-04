const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Video processing service is running' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Video processing service listening on port ${port}`);
});
