import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Comercio from "../resources/capturas/comercio.png";
import Comercio2 from "../resources/capturas/comercio2.png";
import Comercio3 from "../resources/capturas/comercio3.png";
import LogoRedux from "../resources/logos/redux.png";
import LogoReact from "../resources/logos/react.png";
import LogoNode from "../resources/logos/node.png";
import LogoJavascript from "../resources/logos/javascript.png";
import LogoHtml from "../resources/logos/html.png";
import LogoCss from "../resources/logos/css.png";

export default class monitoreo extends Component {
  render() {
    return (
      <ReactBootstrap.Container
        fluid
        className="p-0 m-0 d-flex flex-column h-100"
      >
        <div
          className="p-0 m-0 h-100"
          style={{ width: "100%", backgroundColor: "#d3d3d3" }}
        >
          <h2 className="py-4">Dashboard de ventas</h2>
          <ReactBootstrap.Carousel className="py-2 px-2 text-align-center">
            <ReactBootstrap.CarouselItem>
              <ReactBootstrap.Image
                src={Comercio}
                style={{ width: "60%", height: "auto" }}
              />
            </ReactBootstrap.CarouselItem>
            <ReactBootstrap.CarouselItem>
              <ReactBootstrap.Image
                src={Comercio2}
                style={{ width: "60%", height: "auto" }}
              />
            </ReactBootstrap.CarouselItem>
            <ReactBootstrap.CarouselItem>
              <ReactBootstrap.Image
                src={Comercio3}
                style={{ width: "60%", height: "auto" }}
              />
            </ReactBootstrap.CarouselItem>
          </ReactBootstrap.Carousel>
          <div style={{ backgroundColor: "white" }}>
            <h2 className="py-4">Tecnologias utilizadas</h2>
            <ReactBootstrap.Container
              fluid
              className="w-100 m-0 d-flex justify-content-around align-items-center"
              style={{
                flexWrap: "wrap",
                paddingLeft: "15rem",
                paddingRight: "15rem",
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
          </div>
        </div>
        <div
          className="py-2 d-flex flex-column"
          style={{ width: "100%", paddingLeft: "15rem", paddingRight: "15rem" }}
        >
          <h3 className="py-4">Descripcion:</h3>
          <p className="py-4">
            Una aplicacion web hecha para digitalizar el proceso de venta. La
            misma cuenta con una ventana principal con 2 secciones. La primera
            para el escaneo de productos para su venta, en donde el producto se
            agrega a un carrito y se muestran datos del mismo para su venta,
            luego de confirmar la venta los productos se descontaran del stock.
            La otra seccion para la incorporacion de nuevos productos al sistema
            tambien utilizando el escaner. Este sistema tambien cuenta con una
            ventana para ver la totalidad del stock y otra ventana para ver
            graicos de venta.
          </p>
          <h3 className="py-4">Observaciones:</h3>
          <p className="py-4">
            Para el desarrollo de esta aplicacion web se utilizo una API REST de
            creacion propia para nutrir el sistema. El mismo cuenta con un
            sistema de inicio de sesión y autenticacion con tokens jwt (json web
            tokens). El sistema de graicos fue hecho en su totalidad utilizando
            la libreria de canvas y las bases de datos utilizadas son de MySQL.
          </p>
        </div>
      </ReactBootstrap.Container>
    );
  }
}
