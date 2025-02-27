import React from 'react'
import { Table, Container, Button, Collapse,
    Navbar, Col, Row,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText, } from 'reactstrap';
import Greeting from './components/Greeting';

export default function Footer() {
  return (
    <div>
        <Row xs="4">
            <Col className="bg-light border">            
                <Greeting name="General" first="Dhruv" second="Bhavsar" degree="degree" city="Banglore" />
            </Col>
            <Col className="bg-light border">
                <Greeting name="General" first="Dhruv" second="Bhavsar" degree="degree" city="Banglore" />
            </Col>
            <Col className="bg-light border">
                <h5>General links</h5>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Home</a></li>
                </ul>
            </Col>
            <Col className="bg-light border">
                <h5>General links</h5>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Home</a></li>
                </ul>
            </Col>
        </Row>
    </div>
  )
}
