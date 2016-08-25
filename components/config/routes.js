var React = require('react');
var ReactDOM = require('react-dom');


var React       = require('react'),
    ReactRouter = require('react-router'),
    Router      = ReactRouter.Router,
    Route       = ReactRouter.Route,
    IndexRoute  = ReactRouter.IndexRoute,
    hashHistory = ReactRouter.hashHistory,
    Main        = require('./../main.js'),
    Home        = require('./../home.js'),
    About       = require('./../about.js'),
    Animals     = require('../animalApp.js');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='/home' component={Home}/>
      <Route path='/animals' component={Animals}/>
      <Route path='/about' component={About}/>
    </Route>
  </Router>
);

ReactDOM.render(
routes,
document.getElementById('app')
);


/*var React =require('react');
var ReactDOM = require('react-dom');
import {Router, Route, hashHistory, IndexRoute } from 'react-router';
var Main = require('../Main');
var home = require('../Home');
var About = require('../about');
var Animals = require('../animalApp');

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home}/>
        <Route path='/animals' component={Animals}/>
        <Route path='/about' component={About}/>
      </Route>
    </Router>,
    document.getElementById('app');
);*/