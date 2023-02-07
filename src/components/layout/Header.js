import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
function Header(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-black  mb-3 py-0" style={headingStyle}>
      <div className="container">
        <a href="/" className="navbar-brand">
          {props.branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                
             <i className="fa fa-home"></i>Home
              </Link>
              <Link to="/about" className="nav-link">
              <i className="fa fa-question"></i>
                About
              </Link>
              <Link to="/contact/add" className="nav-link">
                
              <i className="fa fa-plus"></i> Add contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  branding: "My App",
};
Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

const headingStyle={
    backgroundColor:'Gold',
    // fontSize:'50px'
}
export default Header;
