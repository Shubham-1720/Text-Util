import React from 'react';
import PropTypes from 'prop-types';
// import {BrowserRouter, Link } from 'react-router-dom';


export default function Navbar(props) {
  
  return (
    // <BrowserRouter>
    <nav className={`navbar navbar-expand-lg navbar-${props.darkMode} bg-${props.darkMode}`}>
      <div className="container-fluid">
        {/* here we have make dynamic title  */}
        <a className="navbar-brand" href="#">{props.title}</a>
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
              {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
            </li>
            {/* <li className="nav-item">
              {/* here we have make dynamic about us  */}
              {/* <a className="nav-link" href="/about">{props.aboutMathateria}</a> */}
            {/* </li> */} 
            </ul>
          
        <div className={`form-check form-switch text-${props.textColor} mx-2`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.enable}</label>
            </div>
        {/* <div className={`form-check form-switch text-${props.textColor} mx-2`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleModeGreen} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.enable}</label>
            </div> */}
        </div>
      </div>
    </nav>
    //  </BrowserRouter>
  )
}


// for props validation and check 
Navbar.propTypes = { title: PropTypes.string, aboutMathateria: PropTypes.string }


// for props validation and check and isrequired to make declaration manadatory 
// Navbar.propTypes = {title: PropTypes.string.isRequired, aboutMathateria: PropTypes.string}

// default props 
Navbar.defaultProps = {
  title: 'Set title here',
  aboutMathateria: 'set about here'
}