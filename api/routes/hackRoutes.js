'use strict';

module.exports = function(app) {
  var sensorList = require('../controllers/hackController');

  // todoList Routes
  app.route('/sensor')
    .get(sensorList.list_all_sensor)
    .post(sensorList.create_a_sensor);


  app.route('/sensor/:sensorId')
    .get(sensorList.read_a_sensor)
    .put(sensorList.update_a_sensor)
    .delete(sensorList.delete_a_sensor);
};
