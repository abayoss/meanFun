const express = require('express'),
  app = express(),
  port = 3000,
  mongoose = require('mongoose'),
  dbName = 'meanFun',
  cors = require('cors'),
  bodyParser = require('body-parser');
const indexRoutes = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true })
  .then(console.log(`Connected to ${dbName}!`))
  .catch(err => console.log(err));

let corsOption = {
  origin: ['http://127.0.0.1:5500', 'http://localhost:4200'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Origin,X-Requested-With,content-type,Accept,Authorization',
  preflightContinue: true,
  credentials: true
};
app.use(cors(corsOption));

//Routes :
app.use('/', indexRoutes);

app.listen(port, () =>
  console.log('server runing on port ' + port + ' ...')
);
