import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


//let restaurant_names = this.props.database.map(
//  restaurant =>
//    <Link to={`/restaurants/${restaurant._id}`}>{restaurant.name}</Link>
//)
//this.setState({
//  filtered_restaurant_names: restaurant_names
//})


export default class RestaurantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant_db: [],
      filtered_restaurant_names: []
    }
  }

  componentDidMount() {
    axios.get('/api/restaurant')
      .then(res => {
        this.setState({
          restaurant_db: res.data.results
        }, () => {
                    let restaurant_names = this.state.restaurant_db.map(restaurant =>
                      <div>

                        <Link to={`/restaurants/${restaurant._id}`}>{restaurant.name}</Link>
                      </div>


                    )
                    this.setState({
                      filtered_restaurant_names: restaurant_names
                    })
                  })
      })
      .catch(function (err) {
        console.log(err);
      });
  }






  //filterRestaurantsByName(event){
    // Creates array of names
  //  let restaurant_names = this.state.restaurant_db.map(
  //    restaurant => <Link to={"/" + restaurant.id}>{restaurant.name}</Link>
  //  )
    // Sets state to what you typed
  //  this.setState({
  //    text: event.target.value
  //  })
  //  let typed = event.target.value.toLowerCase();
    //Filters names
  //  let filtered = restaurant_names.filter(function(restaurant_name){
  //    restaurant_name = restaurant_name.toString().toLowerCase();
  //    return (restaurant_name.indexOf(typed) > -1);
  //  })
  //  this.setState({
  //    filtered_restaurant_names: filtered
  //  })
  //}




  render() {
    const list = this.props.database.map((restaurant, index) =>
      <div key={index} className="col-md-3">
          <Link to={`/restaurants/${restaurant._id}`}><img src={restaurant.picture} alt="Restaurant" height="197" width="100%"/></Link>
          <h3>{restaurant.name}</h3>

      </div>
    )
    return (
        <div className="container-fluid">
          <h1>Restaurant List</h1>
          <div className="row">
            {list}
          </div>
        </div>
    )
  }
}


//        <h2>Restaurant search bar</h2>
//        <input
//          onChange={(event) => this.filterRestaurantsByName(event)}
//          value={this.state.text}
//          placeholder = "Search Restaurants"
//        />


//<img src={`${restaurant.picture}`}/>
