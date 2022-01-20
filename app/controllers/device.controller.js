const db = require('../models')
const statuscode = require('../constants/statuscode.js')
const Device = db.device

// Create and Save a new Device
exports.create = (req, res) => {
  // Validate request
  if (!req.body.vendor) {
    res.status(statuscode.BAD_REQUEST).send({ message: 'Content can not be empty!' })
    return
  }

  // Create a Device
  const device = new Device({    
    gateway_id: req.body.gateway_id,
    vendor: req.body.vendor,
    isonline: req.body.isonline ? req.body.isonline : false,
  })

  // Save Device in the database
  device
    .save(device)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(statuscode.ERROR).send({
        message:
          err.message || 'Some error occurred while creating the Device.',
      })
    })
}
// Retrieve all Devices from the database.
exports.findAll = (req, res) => {
  const vendor = req.query.vendor
  var condition = vendor
    ? { vendor: { $regex: new RegExp(vendor), $options: 'i' } }
    : {}

  Device.find(condition)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(statuscode.ERROR).send({
        message:
          err.message || 'Some error occurred while retrieving tutorials.',
      })
    })
}

// Find a single Device with an id
exports.findOne = (req, res) => {
  const id = req.params.id

  Device.findById(id)
    .then((data) => {
      if (!data)
        res
          .status(statuscode.NOT_FOUND)
          .send({ message: 'Not found Device with id ' + id })
      else res.send(data)
    })
    .catch((err) => {
      res
        .status(statuscode.ERROR)
        .send({ message: 'Error retrieving Device with id=' + id })
    })
}

// Update a Device by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(statuscode.BAD_REQUEST).send({
      message: 'Data to update can not be empty!',
    })
  }

  const id = req.params.id

  Device.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(statuscode.NOT_FOUND).send({
          message: `Cannot update Device with id=${id}. Maybe Device was not found!`,
        })
      } else res.send(data)
    })
    .catch((err) => {
      res.status(statuscode.ERROR).send({
        message: 'Error updating Device with id=' + id,
      })
    })
}

// Delete a Device with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id

  Device.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(statuscode.NOT_FOUND).send({
          message: `Cannot delete Device with id=${id}. Maybe Device was not found!`,
        })
      } else {
        res.send({
          message: 'Device was deleted successfully!',
        })
      }
    })
    .catch((err) => {
      res.status(statuscode.ERROR).send({
        message: 'Could not delete Device with id=' + id,
      })
    })
}

// Retrieve all Devices from the database by gateway_id.
exports.findAllByGatewayId = (req, res) => {
  const gatewai_id = req.params.gateway_id

  Device.find({ gateway_id: gatewai_id })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(statuscode.ERROR).send({
        message:
          err.message || "Some error occurred while retrieving devices."
      });
    });
};