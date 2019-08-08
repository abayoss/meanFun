const Base = require('../../models/private/militaryBase');
module.exports = {
  addbase: (req, res) => {
    const newBase = {
      name: req.body.name,
      location: req.body.location,
      image: req.body.image,
      background: req.body.background
    };
    new Base(newBase).save().then(base => {
      res.json(base);
    });
  },
  getbases: (req, res) => {
    // Base.deleteOne({ _id: '5d4b639590afd50a58587b43' }).then(n =>
    //   console.log(n)
    // );
    Base.find().then(bases => {
      res.json(bases);
    });
  },
  getbase: (req, res) => {
    Base.findById(req.params.id).then(base => {
      res.json(base);
    });
  },
  editbase: (req, res) => {
    Base.findById(req.params.id).then(base => {
      base.name = req.body.name;
      base.location = req.body.location;
      base.image = req.body.image;
      base.background = req.body.background;
      base.save().then(base => {
        res.json(base);
      });
    });
  }
};
