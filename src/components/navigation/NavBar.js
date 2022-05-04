import React from 'react'
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
      <>
        {" "}
        <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "orange" : "white",
              textDecoration: "none",
            };
          }}
          to="/events"
        >
          Events
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "orange" : "white",
              textDecoration: "none",
            };
          }}
          to="about"
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "orange" : "white",
              textDecoration: "none",
            };
          }}
          to="profiles"
        >
          Profiles
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "orange" : "white",
              textDecoration: "none",
            };
          }}
          to="career"
        >
          Career
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "orange" : "white",
              textDecoration: "none",
            };
          }}
          to="/signIn"
        >
          signIn
        </NavLink>
      </>
    );
}

export default NavBar
