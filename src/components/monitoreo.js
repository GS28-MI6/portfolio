import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Monitoreo from "../resources/capturas/monitoreo.PNG";
import Monitoreo2 from "../resources/capturas/monitoreo2.PNG";
import Monitoreo3 from "../resources/capturas/monitoreo3.PNG";
import Monitoreo4 from "../resources/capturas/monitoreo4.PNG";
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
        className=" p-0 m-0 d-flex flex-column h-100"
      >
        <div
          className="p-0 m-0 h-100"
          style={{ width: "100%", backgroundColor: "#F5F5F5" }}
        >
          <h2 className="py-4">Centro de monitoreo</h2>
          <ReactBootstrap.Carousel className="py-2 px-2 text-align-center">
            <ReactBootstrap.CarouselItem>
              <ReactBootstrap.Image
                src={Monitoreo}
                style={{ width: "60%", height: "auto" }}
              />
            </ReactBootstrap.CarouselItem>
            <ReactBootstrap.CarouselItem>
              <ReactBootstrap.Image
                src={Monitoreo4}
                style={{ width: "60%", height: "auto" }}
              />
            </ReactBootstrap.CarouselItem>
            <ReactBootstrap.CarouselItem>
              <ReactBootstrap.Image
                src={Monitoreo2}
                style={{ width: "60%", height: "auto" }}
              />
            </ReactBootstrap.CarouselItem>
            <ReactBootstrap.CarouselItem>
              <ReactBootstrap.Image
                src={Monitoreo3}
                style={{ width: "60%", height: "auto" }}
              />
            </ReactBootstrap.CarouselItem>
          </ReactBootstrap.Carousel>
          <div style={{ backgroundColor: "white" }}>
            <h2 className="py-4">Tecnologias utilizadas</h2>
            <ReactBootstrap.Container
              fluid
              className="w-100 p-0 m-0 d-flex justify-content-around align-items-center"
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
            Una aplicacion web hecha especificamente para la recepcion de
            alertas enviadas desde otra aplicacion propia. La misma cuenta con
            su bandeja principal (donde recive las alertas enviadas) y una
            bandeja secundaria (donde ve alertas alertas viejas por propositos
            estadisticos), ademas de una ventana dedicada especificamente al
            muestreo de datos estadisticos en forma de diversos graficos, con
            capacidad de filtrar por tipos y fechas.
          </p>
          <h3 className="py-4">Observaciones:</h3>
          <p className="py-4">
            Para el desarrollo de esta aplicacion web se trabajo con la libreria
            de redux. Uno de los puntos fuertes del proyecto es el uso de una
            API rest de creacion propia creada con node y express, que utiliza
            para nutrirse. Tambien se utilizo la herramienta websocket para
            aumentar la eficiencia y velocidad de respuesta de la aplicacion,
            gracias a esto se redujo significativamente el consumo de recursos
            de la misma.
          </p>
        </div>
      </ReactBootstrap.Container>
    );
  }
}
