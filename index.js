import express from 'express';
import db from './db/db';

// Set up the express app
const app = express()

// get all devices
app.get('/api/v1/devices', (req, res) => {
    res.status(200).send({
      success: 'true',
      message: 'devices retrieved successfully',
      devices: db
    })
  });

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))