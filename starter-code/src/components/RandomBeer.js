import React, { Component } from "react";
import axios from "axios";

export default class RandomBeer extends Component {
  state = {
    randomBeer: null
  };

  componentDidMount() {
    console.log("MOUNTed");
    this.getBeer();
  }
  getBeer() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(res => {
      console.log("RANDOM DATA", res.data);
      const random = Math.floor(Math.random() * res.data.length);
      const randomBeer = res.data[random];
      this.setState({
        randomBeer: randomBeer
      });
    }, console.log("RANDOM", this.state.randomBeer));
  }

  render() {
    if (!this.state.randomBeer) {
      return <div></div>;
    }

    return (
      <div>
        <img
          src={this.state.randomBeer.image_url}
          alt={this.state.randomBeer.image_url}
        ></img>

        <h1>{this.state.randomBeer.name}</h1>
        <h5>{this.state.randomBeer.tagline}</h5>
        <p>{this.state.randomBeer.first_brewed}</p>
        <p>{this.state.randomBeer.attenuation_level}</p>
        <p>{this.state.randomBeer.description}</p>
        <p>contributed by: {this.state.randomBeer.contributed_by}</p>
      </div>
    );
  }
}
