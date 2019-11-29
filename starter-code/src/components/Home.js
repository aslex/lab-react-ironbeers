import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/beer-list">
        <div className="home">
          <h1>All Beers</h1>
        </div>
      </Link>
      <Link to="/random">
        <div className="home">
          <h1>Random Beer</h1>
        </div>
      </Link>
      <Link to="/new">
        <div className="home">
          <h1>New Beer</h1>
        </div>
      </Link>
    </div>
  );
};

export default Home;
