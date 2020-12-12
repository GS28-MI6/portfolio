import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";

export default class navbar extends Component {
  render() {
    return (
      <ReactBootstrap.Navbar bg="dark" variant="dark" expand="md" className="px-2 py-0">
        <ReactBootstrap.Navbar.Brand href="#home">Gabriel Sosa</ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto">
            <ReactBootstrap.Nav.Link href="#home">Sobre mi</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="#link">Habilidades</ReactBootstrap.Nav.Link>
            <ReactBootstrap.NavDropdown title="Proyectos" id="basic-nav-dropdown" style={{borderRadius:"0px"}}>
              <ReactBootstrap.NavDropdown.Item href="#action/3.1">Centro de monitoreo</ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="#action/3.2">
                App anti-panico
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Divider />
              <ReactBootstrap.NavDropdown.Item href="#action/3.3">Servicio de ventas</ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="#action/3.4">
               App de ventas
              </ReactBootstrap.NavDropdown.Item>
            </ReactBootstrap.NavDropdown>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    );
  }
}
