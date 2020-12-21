import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md bg-primary d-flex justify-content-end pt-4 pb-4 pr-5">
          <ul className="navbar-nav">
            <li>
              <Link to="/" className="text-light">
                Home
              </Link>
            </li>
            <li>
              <Link to="/dappInfo" className="text-light ml-5">
                Dapp info
              </Link>
            </li>
            <li>
              <Link to="/beginSold" className="text-light ml-5">
                Begin sold
              </Link>
            </li>
            <li>
              <Link to="/credit" className="text-light ml-5">
                Credit ether
              </Link>
            </li>
            <li>
              <Link to="/extract" className="text-light ml-5">
                Extract ether
              </Link>
            </li>
            <li>
              <Link to="/endSold" className="text-light ml-5">
                End sold
              </Link>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
