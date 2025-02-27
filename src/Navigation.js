import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Table, Container, Button, Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText, } from 'reactstrap';

export default function Navigation(args) {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
        <Navbar {...args}>
            <NavbarBrand href="/">Marriage</NavbarBrand>
            
            <nav>
                <NavLink to="/" className="mukesh">Home</NavLink>
                <NavLink to="/guests" className={({ isActive }) => (isActive ? 'active' : '')}>Guest</NavLink>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
            </nav>

            <Nav className="me-auto" navbar>
                <NavItem><NavLink href="/" >Home</NavLink></NavItem>                
                <NavItem><NavLink href="/guests/" className={({ isActive }) => (isActive ? 'active' : '')}>Guest</NavLink></NavItem>
                <NavItem><NavLink href="/contact/" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></NavItem>
            </Nav>
        </Navbar>
            
        </>
    )  
}

