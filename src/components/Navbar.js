import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
export default function Navbar(props) {
  return (
    <div>
      {/* text-${props.mode==='light'?'dark':'light'} */}
      <nav className={`navbar navbar-expand-lg bg-${props.mode==='dark'?'dark':'info'} text-${props.mode==='light'?'dark':'light'} `}>
        <div className="container-fluid">
          <NavLink className={`navbar-brand text-${props.mode === 'light'?'dark':'light' } `} to="/">
            {props.title}
          </NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

          <div className={`collapse navbar-collapse `} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
              <li className={`nav-item text-${props.mode === 'light'?'light':'dark' } `}>
                <NavLink className={`nav-link active text-${props.mode === 'light'?'dark':'light' }  `} aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link active text-${props.mode === 'light'?'dark':'light' } `} aria-current="page" to="/about">
                  About
                </NavLink>
              </li>
              
            </ul>
          </div>
          <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input class="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
  <label class="form-check-label"  for="flexSwitchCheckDefault">{props.mode==='light'?'turn off light ':'turn ON light'}</label>
</div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  bittu: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "set title here",
};














