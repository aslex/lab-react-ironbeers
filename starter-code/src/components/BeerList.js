import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

class BeerList extends React.Component {
  state = {
    beers: null
  };
  componentDidMount() {
      console.log('MOUNT beer list')
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(res => {
        console.log(res.data);
        this.setState(
          {
            beers: res.data
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    if (!this.state.beers) {
      return <div></div>;
    }
    const beerList = [...this.state.beers].map(el => {
      return (
        <Link to={`/${el._id}`} key={el._id}>
          <img style={ { maxHeight: "40vh"}} src={el.image_url} alt={el.name} />
          <div className="beer-info">
            <h2>{el.name}</h2>
            <h4>{el.tagline}</h4>
            <p>First Brewed: {el.first_brewed}</p>
          </div>
        </Link>
      );
    });
    return <div>{beerList}</div>;
  }
}
export default BeerList;
