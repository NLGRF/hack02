'use strict';

var mongoose = require('mongoose');
var Sensor = mongoose.model('Sensors');

exports.list_all_sensor = function(req, res) {
  Sensor.find({}, function(err, sensor) {
    if (err)
      res.send(err);
    res.json(sensor);
  });
};

exports.create_a_sensor = function(req, res) {
  var new_sensor = new Sensor(req.body);
  new_sensor.sensor_id = new_sensor._id;
  new_sensor.sensor_name = "SUT IoT sensor";
  new_sensor.save(function(err, sensor) {
    if (err)
      res.send(err);
    res.json(sensor);
  });
};


exports.read_a_sensor = function(req, res) {
  console.log("GET sensor info of " + req.params.sensor_id);
  Sensor.findById(req.params.sensor_id, function(err, sensor) {
    if (err)
      res.send(err);
    res.json(sensor);
  });
};


exports.update_a_sensor = function(req, res) {
  Sensor.findOneAndUpdate({_id: req.params.sensor_id}, req.body, {new: true}, function(err, sensor) {
    if (err)
      res.send(err);
    res.json(sensor);
  });
};


exports.delete_a_sensor = function(req, res) {

  Sensor.remove({
    _id: req.params.sensor_id
  }, function(err, sensor) {
    if (err)
      res.send(err);
    res.json({ message: 'Sensor id[' + req.params.sensor_id + '] successfully deleted' });
  });
};
