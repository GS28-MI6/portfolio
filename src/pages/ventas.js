import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/proyects.css";
import images  from "../imageIndex"
import { useTranslation } from "react-i18next";

const {IvaloWA1, IvaloWA2, IvaloWA3, IvaloWA4, LogoCss, LogoTypescript, LogoNode, LogoReact, LogoRedux, LogoMySQL} = images
const tecArray = [LogoCss, LogoTypescript, LogoNode, LogoReact, LogoRedux, LogoMySQL]
export default function Ventas() {
  const { t } = useTranslation("global");

  return (
    <ReactBootstrap.Container
      fluid
      className="p-0 m-0 d-flex flex-column h-100"
    >
      <div
        className="p-0 m-0 w-100 h-100"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <h2 className="py-4 textTitle">{t("navbar.ivaloWA")}</h2>
        <ReactBootstrap.Carousel className="py-2 px-2 text-align-center">
          <ReactBootstrap.CarouselItem>
            <ReactBootstrap.Image
              src={IvaloWA1}
              style={{ width: "60%", height: "auto" }}
            />
          </ReactBootstrap.CarouselItem>
          <ReactBootstrap.CarouselItem>
            <ReactBootstrap.Image
              src={IvaloWA2}
              style={{ width: "60%", height: "auto" }}
            />
          </ReactBootstrap.CarouselItem>
          <ReactBootstrap.CarouselItem>
            <ReactBootstrap.Image
              src={IvaloWA3}
              style={{ width: "60%", height: "auto" }}
            />
          </ReactBootstrap.CarouselItem>
          <ReactBootstrap.CarouselItem>
            <ReactBootstrap.Image
              src={IvaloWA4}
              style={{ width: "60%", height: "auto" }}
            />
          </ReactBootstrap.CarouselItem>
        </ReactBootstrap.Carousel>
        <div style={{ backgroundColor: "white" }}>
          <h2 className="py-4 textTitle">{t("general.technologies")}</h2>
          <ReactBootstrap.Container
            fluid
            className="w-100 p-0 m-0 d-flex justify-content-around align-items-center"
            style={{
              flexWrap: "wrap",
              paddingLeft: "15rem",
              paddingRight: "15rem",
            }}
          >
            {
              tecArray.map((item, index) => {
                return (
                  <ReactBootstrap.Image
                    src={item}
                    className="my-5"
                    style={{ width: "auto", height: "7rem" }}
                    key={index}
                  />
                );
              })
            }
          </ReactBootstrap.Container>
        </div>
      </div>
      <div
        className="py-2 px-5 d-flex flex-column justify-content-center align-items-center"
        style={{ width: "100%"}}
      >
        <h3 className="py-4 textTitle">{t("general.description")}:</h3>
        <p className="py-4 description">
          {t("ivaloWA.description")}
        </p>
        <h3 className="py-4 textTitle">{t("general.observations")}:</h3>
        <p className="py-4 description">
          {t("ivaloWA.observations")}
        </p>
      </div>
    </ReactBootstrap.Container>
  );
}
