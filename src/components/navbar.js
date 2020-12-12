import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";

export default class navbar extends Component {
  render() {
    return (
      <ReactBootstrap.Navbar bg="dark" variant="dark" expand="md" className="px-2 py-0">
        <ReactBootstrap.Navbar.Brand href="/">Gabriel Sosa</ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto">
            <ReactBootstrap.Nav.Link href="https://github.com/GS28-MI6">Github</ReactBootstrap.Nav.Link>
            <ReactBootstrap.NavDropdown title="Proyectos" id="basic-nav-dropdown" style={{borderRadius:"0px"}}>
              <ReactBootstrap.NavDropdown.Item href="/monitoreo">Centro de monitoreo</ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="/seguridad">
                App anti-panico
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="/ventas">Servicio de ventas</ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="/ventasApp">
               App de ventas
              </ReactBootstrap.NavDropdown.Item>
            </ReactBootstrap.NavDropdown>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    );
  }
}
