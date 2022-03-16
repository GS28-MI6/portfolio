import React from "react";
import * as ReactBootstrap from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

export default function Navbar () {
  const { t } = useTranslation("global");
    return (
      <ReactBootstrap.Navbar bg="dark" variant="dark" expand="md" className="px-2 py-0">
        <ReactBootstrap.Navbar.Brand href="/">Gabriel Sosa</ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto">
            <ReactBootstrap.Nav.Link href="https://github.com/GS28-MI6">Github</ReactBootstrap.Nav.Link>
            <ReactBootstrap.NavDropdown title="Proyectos" id="basic-nav-dropdown" style={{borderRadius:"0px"}}>
              <ReactBootstrap.NavDropdown.Item href="/monitoreo">{t("navbar.monitCenter")}</ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="/seguridad">
                {t("navbar.panicApp")}
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="/ventas">{t("navbar.ivaloWA")}</ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="/ventasApp">
              {t("navbar.ivaloMA")}
              </ReactBootstrap.NavDropdown.Item>
            </ReactBootstrap.NavDropdown>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    );
}
