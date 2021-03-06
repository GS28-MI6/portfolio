import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import images  from "../imageIndex"

const {Tech, Monitoreo, Comercio, Seguridad, ComercioApp, LogoCss, LogoHtml, LogoJavascript, LogoNode, LogoReact, LogoRedux} = images

export default class inicio extends Component {
  render() {
    return (
      <ReactBootstrap.Container fluid className="p-0 m-0">
        <ReactBootstrap.Container
          fluid
          className="p-0 m-0 w-100"
          style={{
            height: "95vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundImage: "url(" + Tech + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            <h1 style={{ color: "white" }}>Gabriel Alessandro Sosa</h1>
            <h2 style={{ color: "#d3d3d3" }}>Fullstack developer</h2>
          </div>
          <div className="w-75 mt-5">
            <h3 style={{ color: "white" }}>
              Desarrollador de aplicaciones web y moviles con entusiasmo por
              aprender nuevas tecnologias.
            </h3>
          </div>
        </ReactBootstrap.Container>
        <ReactBootstrap.Container
          fluid
          className="w-100 p-0 m-0 d-flex justify-content-around align-items-center"
          style={{
            flexWrap: "wrap",
            borderStyle: "solid",
            borderLeft: 3,
            borderRight: 3,
            borderColor: "#d3d3d3",
          }}
        >
          <ReactBootstrap.Image
            src={LogoHtml}
            className="my-5"
            style={{ width: "auto", height: "7rem" }}
          />
          <ReactBootstrap.Image
            src={LogoCss}
            className="my-5"
            style={{ width: "auto", height: "7rem" }}
          />
          <ReactBootstrap.Image
            src={LogoJavascript}
            className="my-5"
            style={{ width: "auto", height: "7rem" }}
          />
          <ReactBootstrap.Image
            src={LogoNode}
            className="my-5"
            style={{ width: "auto", height: "7rem" }}
          />
          <ReactBootstrap.Image
            src={LogoReact}
            className="my-5"
            style={{ width: "auto", height: "7rem" }}
          />
          <ReactBootstrap.Image
            src={LogoRedux}
            className="my-5"
            style={{ width: "auto", height: "7rem" }}
          />
        </ReactBootstrap.Container>
        <h2 className="mt-5">Mis proyetos</h2>
        <ReactBootstrap.Container fluid className="my-5 mx-0">
          <ReactBootstrap.Row className="d-flex justify-content-md-center mt-5">
            <ReactBootstrap.Col className="d-flex my-2 justify-content-md-center">
              <ReactBootstrap.Card
                style={{ width: "40rem", cursor: "pointer" }}
                onClick={() => (window.location.href = "/monitoreo")}
              >
                <ReactBootstrap.Card.Img
                  variant="top"
                  src={Monitoreo}
                  style={{ width: "100%", height: 350 }}
                />
                <ReactBootstrap.Card.Body>
                  <ReactBootstrap.Card.Title>
                    Centro de monitoreo
                  </ReactBootstrap.Card.Title>
                </ReactBootstrap.Card.Body>
              </ReactBootstrap.Card>
            </ReactBootstrap.Col>
            <ReactBootstrap.Col className="d-flex my-2 justify-content-md-center">
              <ReactBootstrap.Card
                style={{ width: "40rem", cursor: "pointer" }}
                onClick={() => (window.location.href = "/ventas")}
              >
                <ReactBootstrap.Card.Img
                  variant="top"
                  src={Comercio}
                  style={{ width: "100%", height: 350 }}
                />
                <ReactBootstrap.Card.Body>
                  <ReactBootstrap.Card.Title>
                    Dashboard de ventas
                  </ReactBootstrap.Card.Title>
                </ReactBootstrap.Card.Body>
              </ReactBootstrap.Card>
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
          <ReactBootstrap.Row className="d-flex justify-content-md-center mt-5">
            <ReactBootstrap.Col className="d-flex my-2 justify-content-md-center">
              <ReactBootstrap.Card
                style={{
                  width: "40rem",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#F5F5F5",
                }}
                onClick={() => (window.location.href = "/seguridad")}
              >
                <ReactBootstrap.Card.Img
                  variant="top"
                  src={Seguridad}
                  style={{ width: "40%", height: 350 }}
                />
                <ReactBootstrap.Card.Body
                  style={{ width: "100%", backgroundColor: "white" }}
                >
                  <ReactBootstrap.Card.Title>
                    Aplicación de ventas
                  </ReactBootstrap.Card.Title>
                </ReactBootstrap.Card.Body>
              </ReactBootstrap.Card>
            </ReactBootstrap.Col>
            <ReactBootstrap.Col className="d-flex my-2 justify-content-md-center">
              <ReactBootstrap.Card
                style={{
                  width: "40rem",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#F5F5F5",
                }}
                onClick={() => (window.location.href = "/ventasApp")}
              >
                <ReactBootstrap.Card.Img
                  variant="top"
                  src={ComercioApp}
                  style={{ width: "40%", height: 350 }}
                />
                <ReactBootstrap.Card.Body
                  style={{ width: "100%", backgroundColor: "white" }}
                >
                  <ReactBootstrap.Card.Title>
                    Card Title
                  </ReactBootstrap.Card.Title>
                </ReactBootstrap.Card.Body>
              </ReactBootstrap.Card>
            </ReactBootstrap.Col>
          </ReactBootstrap.Row>
        </ReactBootstrap.Container>
      </ReactBootstrap.Container>
    );
  }
}
