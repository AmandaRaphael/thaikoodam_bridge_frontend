import React from 'react'
import logo from "../../assets/tkdm-logo-1.png";
import { NavLink } from "react-router-dom";

const LogoLink = () => {
    return (
      <div>
        <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
              textDecoration: "none",
            };
          }}
          to="/"
        >
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
    );
}

export default LogoLink
