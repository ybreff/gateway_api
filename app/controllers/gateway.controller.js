const db = require('../models')
const statuscode = require('../constants/statuscode.js')
const Gateway = db.gateway

// Create and Save a new Gateway
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(statuscode.BAD_REQUEST).send({ message: 'Content can not be empty!' })
    return
  }

  // Create a Gateway
  const gateway = new Gateway({
    name: req.body.name,
    address: req.body.address,
  })

  // Save Gateway in the database
  gateway
    .save(gateway)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(statuscode.ERROR).send({
        message:
          err.message || 'Some error occurred while creating the Gateway.',
      })
    })
}
// Retrieve all Gateways from the database.
exports.findAll = (req, res) => {
  const name = req.query.name
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: 'i' } }
    : {}

  Gateway.find(condition)
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

// Find a single Gateway with an id
exports.findOne = (req, res) => {
  const id = req.params.id

  Gateway.findById(id)
    .then((data) => {
      if (!data)
        res
          .status(statuscode.NOT_FOUND)
          .send({ message: 'Not found Gateway with id ' + id })
      else res.send(data)
    })
    .catch((err) => {
      res
        .status(statuscode.ERROR)
        .send({ message: 'Error retrieving Gateway with id=' + id })
    })
}

// Update a Gateway by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(statuscode.BAD_REQUEST).send({
      message: 'Data to update can not be empty!',
    })
  }

  const id = req.params.id

  Gateway.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(statuscode.NOT_FOUND).send({
          message: `Cannot update Gateway with id=${id}. Maybe Gateway was not found!`,
        })
      } else res.send(data)
    })
    .catch((err) => {
      res.status(statuscode.ERROR).send({
        message: 'Error updating Gateway with id=' + id,
      })
    })
}

// Delete a Gateway with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id

  Gateway.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(statuscode.NOT_FOUND).send({
          message: `Cannot delete Gateway with id=${id}. Maybe Gateway was not found!`,
        })
      } else {
        res.send({
          message: 'Gateway was deleted successfully!',
        })
      }
    })
    .catch((err) => {
      res.status(statuscode.ERROR).send({
        message: 'Could not delete Gateway with id=' + id,
      })
    })
}
