const Motor = require('../../models/public/motor');
module.exports = {
  addMotor: (req, res) => {
    const newMotor = {
      model: req.body.model,
      image: req.body.image,
      details: req.body.details,
      technicalDetails: {
        DISPLACEMENT: req.body.technicalDetails.DISPLACEMENT + ' cm³',
        POWERINHP: req.body.technicalDetails.POWERINHP + ' hp',
        POWERINKW: req.body.technicalDetails.POWERINKW + ' kW',
        TORQUE: req.body.technicalDetails.TORQUE + ' Nm',
        DESIGN: req.body.technicalDetails.DESIGN,
        STROKE: req.body.technicalDetails.STROKE + ' mm'
      }
    };
    new Motor(newMotor).save().then(motor => {
      res.json(motor);
    });
  },
  getMotors: (req, res) => {
    // Motor.deleteOne({_id:'5d4b32b49055a20798fb5fbe'}).then(n => console.log(n))
    Motor.find().then(motors => {
      res.json(motors);
    });
  },
  getMotor: (req, res) => {
    Motor.findById(req.params.id).then(motor => {
      res.json(motor);
    });
  },
  editMotor: (req, res) => {
    Motor.findById(req.params.id).then(motor => {
      motor.model = req.body.model;
      motor.details = req.body.details;
      motor.technicalDetails.DISPLACEMENT =
        req.body.technicalDetails.DISPLACEMENT;
      motor.technicalDetails.POWERINHP = req.body.technicalDetails.POWERINHP;
      motor.technicalDetails.POWERINKW = req.body.technicalDetails.POWERINKW;
      motor.technicalDetails.TORQUE = req.body.technicalDetails.TORQUE;
      motor.technicalDetails.DESIGN = req.body.technicalDetails.DESIGN;
      motor.technicalDetails.STROKE = req.body.technicalDetails.STROKE;
      motor.save().then(m => {
        res.json(m);
      });
    });
  }
};
