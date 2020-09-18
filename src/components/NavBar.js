import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink to = '/' exact>Home Page</NavLink>
      <NavLink to = '/movies' exact>Movies Page</NavLink>
      <NavLink to = '/directors' exact>Directors Page</NavLink>
      <NavLink to = '/actors' exact>Actors Page</NavLink>
    </div>
  );
};

export default NavBar;
