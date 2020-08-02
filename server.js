const express = require('express');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const session = require('express-session');
const Mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const config = require('config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const path = require('path');
const whm = require('webpack-hot-middleware');
const ApiException = require('./api/libs/core/ApiException');
const jsonBodyParser = require('./api/libs/jsonBodyParser');


const webpackconfig = require('./webpack.config');

const app = express();
const server = require('http').Server(app);

 const env = app.get('env');

app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'jade');

const compiler = webpack(webpackconfig);

const dbUrl = 'mongodb://localhost/test';

const configureDb = dbUrl => {
        return new Promise((resolve, reject) => {
            Mongoose.connect(dbUrl, err => {
                if (err) {
                    console.log(`Error in mongodb connection ${err.message}`);
                    return reject(err);
                }
               //Mongoose.set('debug',true);
                console.log('Mongodb connection established');
                return resolve(this);
            });
        });
    }
configureDb(dbUrl);    

// use body parser
app.use(
  jsonBodyParser({
    limit: '50000kb'
  })
);
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000
  })
);

// enable cors
app.use(
  cors({
    allowedHeaders: ['sessionId', 'Content-Type'],
    exposedHeaders: ['sessionId'],
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false
  })
);

// enable session
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  })
);
if (env === 'development') {
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackconfig.output.publicPath,
      stats: {
        colors: true
      }
    })
  );
  app.use(whm(compiler));
}

if (env !== 'development') {
  app.get('*.js', (req, res, next) => {
    req.url = `${req.url}.gz`;
    res.set('Content-Encoding', 'gzip');
    next();
  });
  app.get('*.css', (req, res, next) => {
    req.url = `${req.url}.gz`;
    res.set('Content-Encoding', 'gzip');
    res.setHeader('Content-Type', 'text/css');
    next();
  });
}

app.use(morgan('dev'));

app.use('/assets', express.static(`${__dirname}/assets`));

require('./api/router/index')(app);

app.get('/contact*', (req, res) => {
  res.render('contact');
});

app.get('/*', (req, res) => {
  res.render('index');
});

app.listen(config.get('port'), () => {
  app.emit('online');
});

// setup not found handler for requests un-served by any routes.
app.use((req, res, next) =>
  next(
    ApiException.newNotFoundError('Request not handled.').addDetails(
      'Request not handled.'
    )
  )
);

// print when online
app.on('online', () => {
  console.info('App is listening on port ', config.get('port'));
});
