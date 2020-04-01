import React, { useState } from 'react';
import { Button, Link } from '@material-ui/core';
import authAPI from '../../services/authAPI';
import { Redirect, NavLink } from 'react-router-dom';

const NavBar = ({ isAuthenticated, onLogout }) => {
  const handleLogout = event => {
    authAPI.logout();
    onLogout(false);
  };

  return (
    <>
      <NavLink to='/'>
        <Button>Accueil</Button>
      </NavLink>

      {(!isAuthenticated && (
        <>
          <NavLink to='/login'>
            <Button>Connexion</Button>
          </NavLink>
          <NavLink to='/signup'>
            <Button>Inscription</Button>
          </NavLink>
        </>
      )) || (
        <>
          <NavLink to='/inventory'>
            <Button>Inventaire</Button>
          </NavLink>
          <Button onClick={handleLogout}>Deconexion</Button>
        </>
      )}
    </>
  );
};
export default NavBar;
