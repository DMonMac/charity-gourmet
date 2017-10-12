import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './Home.js';
import RestaurantList from './RestaurantList.js';
import Booking from './Booking.js';

export default class Header extends Component {
  render() {
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#defaultNavbar1"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
              <div className=" animbrand">
          					<a className=" navbar-brand animate" href="#">Bootsnipp</a>
          		</div>
          </div>
        <div className="collapse navbar-collapse" id="defaultNavbar1" >
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Restaurant</a></li>
                  <li><a href="#" >Booking</a></li>
            </ul>
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container">
            <div className="navbar-header">
            <Link to="/" className="navbar-brand">Grub Tasty</Link>
            </div>
             <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Menu <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><Link to="/restaurants">Restaurants</Link></li>
                    <li><Link to="/booking">Booking</Link></li>
                  </ul>
                </li>
              </ul>
          </div>
        </nav>
        <Switch>
          <Route
            exact path="/"
            render={ () => <Home/>}/>
          <Route
            exact path="/restaurants"
            render={(props) => (
              <RestaurantList
                url={props.path}
              />
            )}
            />
          <Route
            exact path="/booking"
            component={Booking}
          />
      </Switch>

      </div>
    )
  }
}
