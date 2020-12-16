import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import images  from "../imageIndex"

const {ComercioApp, ComercioApp2, LogoCss, LogoJavascript, LogoNode, LogoReact} = images

export default class ventasApp extends Component {
  render() {
    return (
      <ReactBootstrap.Container
        fluid
        className="m-0 d-flex flex-column"
        style={{
          height: "60%",
          backgroundColor: "#F5F5F5",
          paddingLeft: "15rem",
          paddingRight: "15rem",
        }}
      >
        <div
          className="p-0 m-0 h-100"
          style={{ width: "100%", backgroundColor: "#F5F5F5" }}
        >
          <h2 className="py-4">Aplicación de ventas</h2>
          <ReactBootstrap.Container
            fluid
            className="py-2 px-2 h-100 text-align-center d-flex justify-content-around"
          >
            <ReactBootstrap.Image
              src={ComercioApp}
              style={{ width: "auto", height: "80%" }}
            />
            <ReactBootstrap.Image
              src={ComercioApp2}
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
        <div
          className="py-2 d-flex flex-column"
          style={{ width: "100%" }}
        >
          <h3 className="py-4">Descripcion:</h3>
          <p className="py-4">
            Una aplicacion movil con un conjunto de funcionalidades. Para locales que no cuenten con ningun tipo de escaner de codigo de barra,
            la aplicacion permite usar la camara del telefono para realizar las funcionalidades que tiene la version web. Permite escanear un
            conjunto de productos, agregandolos a un carrito y realizar la venta de los mismos, descontandolos del stock y dejando asentada la transaccion.
            tambien permite agregar productos al sistema para su utura venta y control de stock.
          </p>
          <h3 className="py-4">Observaciones:</h3>
          <p className="py-4">
            Esta aplicacion fue una reduccion de las funcionalidades ya incorporadas a la version web por lo que no requirio desarrollo extra. Se
            hizo uso de la misma API REST que para su version web. La aplicacion es robusta y utiliza un sistema de inicio de sesion propio (el mismo 
            que su version web), y autenticacion con jwt(json web tokens)
          </p>
        </div>
      </ReactBootstrap.Container>
    );
  }
}
