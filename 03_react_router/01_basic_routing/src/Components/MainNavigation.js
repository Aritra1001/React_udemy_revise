import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {

/**NavLink has a special behaviour, it's className property does not a take a string like normal className
 * instead takes a function and the function should return the CSS classname that should be added to the anchor tag
 * That function automatically receives an object which we can destructure to get the isActive property.
 * The object with the isActive property is provided by the react-router-dom.
 * isActive is a boolean which is true if this link is currently active or false, if it does not lead
 * to the currently active route.
 * */
  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                // end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Products
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainNavigation;
