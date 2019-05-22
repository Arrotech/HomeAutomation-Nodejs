import express from 'express';
import db from './db/db';
import bodyParser from 'body-parser';

// Set up the express app
const app = express()

//Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Add a new device
app.post('/api/v1/devices', (req, res) => {
  if(!req.body.name) {
    return res.status(400).send({
      success: 'false',
      message: 'name is required'
    });
  } else if(!req.body.category) {
    return res.status(400).send({
      success: 'false',
      message: 'category is required'
    });
  }
 const device = {
   id: db.length + 1,
   name: req.body.name,
   category: req.body.category
 }
 db.push(device);
 return res.status(201).send({
   success: 'true',
   message: 'device added successfully',
   device
 })
});

// get all devices
app.get('/api/v1/devices', (req, res) => {
    res.status(200).send({
      success: 'true',
      message: 'devices retrieved successfully',
      devices: db
    })
  });

//Fetch a specific device
app.get('/api/v1/devices/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  db.map((device) => {
    if (device.id === id) {
      return res.status(200).send({
        success: 'true',
        message: 'device retrieved successfully',
        device,
      });
    } 
});
 return res.status(404).send({
   success: 'false',
   message: 'device does not exist',
  });
});

//Delete a specific device
app.delete('/api/v1/devices/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  db.map((device, index) => {
    if (device.id === id) {
       db.splice(index, 1);
       return res.status(200).send({
         success: 'true',
         message: 'device deleted successfuly',
       });
    }
  });


    return res.status(404).send({
      success: 'false',
      message: 'device not found',
    });

 
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))