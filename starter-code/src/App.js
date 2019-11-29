import React, { Component } from "react";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import BeerList from "./components/BeerList";
import Home from "./components/Home";
import BeerDetails from "./components/BeerDetails";
import RandomBeer from "./components/RandomBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav></nav>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/beer-list" component={BeerList}></Route>
        <Route exact path="/:id" component={BeerDetails}></Route>
        <Route exact path="/random" component={RandomBeer}></Route>
        {/* <Route exact path="/new" component={NewBeer}></Route> */}
      </div>
    );
  }
}

export default App;
