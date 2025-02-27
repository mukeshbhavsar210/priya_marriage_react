import React from "react";
import { useState, useEffect } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { Table, Container, Button, Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText, } from 'reactstrap';
import Footer from "./Footer";

export default function Root() {
  return (
    <div>
      <Container>
      <header>
        <Navbar>
            <NavbarBrand href="/">Marriage</NavbarBrand>
            <nav className="navigation">
                <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
                <li><NavLink to="/guest" className={({ isActive }) => (isActive ? 'active' : '')}>Guest</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></li>              
            </nav>
        </Navbar>
      </header>
      
      <Outlet />

      <footer>
        <Footer />
      </footer>
      </Container>
    </div>
  );
}