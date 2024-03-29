import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import logo from './media/logo.png';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <img
            src={logo}
            alt="logo"
            style={{
              width: '180px',
              height: '180px',
              paddingLeft: '0px',
              marginRight: '100px',
            }}
          />

          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact us</NavLink>

          {/* Second Nav */}
          {/* <NavBtnLink to="/sign-in">Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/contact">Free Consulting</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
