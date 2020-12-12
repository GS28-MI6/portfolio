import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Seguridad from "../resources/capturas/seguridad.jpg";
import Seguridad2 from "../resources/capturas/seguridad2.jpg";
import Seguridad3 from "../resources/capturas/seguridad3.jpg";
import Seguridad4 from "../resources/capturas/seguridad4.jpg";
import LogoRedux from "../resources/logos/redux.png";
import LogoReact from "../resources/logos/react.png";
import LogoNode from "../resources/logos/node.png";
import LogoJavascript from "../resources/logos/javascript.png";
import LogoCss from "../resources/logos/css.png";

export default class seguridad extends Component {
  render() {
    return (
      <ReactBootstrap.Container
        fluid
        className="m-0 d-flex flex-column"
        style={{
          height: "60%",
          backgroundColor: "#d3d3d3",
          paddingLeft: "15rem",
          paddingRight: "15rem",
        }}
      >
        <div
          className="p-0 m-0 h-100"
          style={{ width: "100%", backgroundColor: "#d3d3d3" }}
        >
          <h2 className="py-4">Aplicación anti-panico</h2>
          <ReactBootstrap.Container
            fluid
            className="py-2 px-2 h-100 text-align-center d-flex justify-content-around"
          >
            <ReactBootstrap.Image
              src={Seguridad}
              style={{ width: "auto", height: "80%" }}
            />
            <ReactBootstrap.Image
              src={Seguridad2}
              style={{ width: "auto", height: "80%" }}
            />
            <ReactBootstrap.Image
              src={Seguridad3}
              style={{ width: "auto", height: "80%" }}
            />
            <ReactBootstrap.Image
              src={Seguridad4}
              style={{ width: "auto", height: "80%" }}
            />
          </ReactBootstrap.Container>
        </div>
        <div style={{ backgroundColor: "white" }}>
          <h2 className="py-4">Tecnologias utilizadas</h2>
          <ReactBootstrap.Container
            fluid
            className="w-100 p-0 m-0 d-flex justify-content-around align-items-center"
            style={{
              flexWrap: "wrap",
            }}
          >
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
          </ReactBootstrap.Container>
        </div>
        <div className="py-2 d-flex flex-column" style={{ width: "100%" }}>
          <h3 className="py-4">Descripcion:</h3>
          <p className="py-4">
            Una aplicacion movil hecha para el envio de alertas simples, de
            diferentes tipos. la aplicacion cuenta con un sistema de inicio de
            sesion y registro, la autenticacion se hace mediante tokens jwt
            (json web tokens). La aplicacion utiliza estos datos de sesion y los
            envia junto con informacion del tipo de alerta seleccionada para que
            estos puedan ser visualizados por otra aplicacion web de creacion
            propia y manejados de una manera especifica.
          </p>
          <h3 className="py-4">Observaciones:</h3>
          <p className="py-4">
            La aplicación hace uso de una API REST de creacion propia, que
            comparte con otra aplicacion web responsable de la recepcion de las
            alertas que esta envia. Para esta aplicacion se utilizaron las
            librerias de react navigate y se implementaron practicas de uso
            eficiente de los recursos del telefono. La misma se encuentra
            disponible para su descarga en la play store pero requiere que los
            usuarios sean manualmente habilitados para su funcionamiento (por
            cuestiones de validacion de identidad)
          </p>
        </div>
      </ReactBootstrap.Container>
    );
  }
}
