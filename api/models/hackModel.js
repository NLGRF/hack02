'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SensorSchema = new Schema({
  sensor_name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  sensorId:{
    type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['on', 'off']
    }],
    default: ['off']
  },
  value: {
    type: String,
    default: "0"
  }
});

module.exports = mongoose.model('Sensors', SensorSchema);
