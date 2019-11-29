import React, { Component } from "react";
import axios from "axios";

export default class BeerDetails extends Component {
  state = {
    singleBeer: null
  };

  componentDidMount() {
    this.getBeer();
  }

  getBeer() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(res => {
        console.log("beer detail response: ", res);
        
        const foundBeer = res.data.find(beer => {
          if (beer._id === this.props.match.params.id) {
            return true;
          }
          return false;
        });
        console.log("FOUND: ", foundBeer);
        this.setState({
          beers: res.data,
          singleBeer: foundBeer
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.getBeer();
    }
  }

  render() {
    if (!this.state.singleBeer) {
      return <div></div>;
    }
    console.log(this.state.singleBeer);
    return (
      <div>
        <img
          src={this.state.singleBeer.image_url}
          alt={this.state.singleBeer.name}
        />
        <div className="single-beer-info">
          <h2>{this.state.singleBeer.name}</h2>
          <h4>{this.state.singleBeer.tagline}</h4>
          <p>{this.state.singleBeer.description}</p>
        </div>
      </div>
    );
  }
}
