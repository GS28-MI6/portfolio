import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/proyects.css";
import images  from "../imageIndex";
import { useTranslation } from "react-i18next";


const {Seguridad1, Seguridad2, Seguridad3, Seguridad4, LogoCss, LogoJavascript, LogoNode, LogoReact, LogoMySQL} = images
const tecArray = [LogoCss, LogoJavascript, LogoNode, LogoReact, LogoMySQL]

export default function Seguridad() {
  const { t } = useTranslation("global");

  return (
    <ReactBootstrap.Container
      fluid
      className="m-0 p-0 d-flex flex-column h-100"
      style={{
        height: "60%",
        backgroundColor: "#F5F5F5"
      }}
    >
      <div
        className="p-0 m-0 w-100 h-100"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <h2 className="py-4 textTitle">{t("navbar.panicApp")}</h2>
        <ReactBootstrap.Container
          fluid
          className="py-2 px-2 h-100 w-100 text-align-center d-flex justify-content-around"
        >
          <ReactBootstrap.Image
            src={Seguridad1}
            style={{ width: "25%", height: "80%" }}
          />
          <ReactBootstrap.Image
            src={Seguridad2}
            style={{ width: "25%", height: "80%" }}
          />
          <ReactBootstrap.Image
            src={Seguridad3}
            style={{ width: "25%", height: "80%" }}
          />
          <ReactBootstrap.Image
            src={Seguridad4}
            style={{ width: "25%", height: "80%" }}
          />
        </ReactBootstrap.Container>
      </div>
      <div style={{ backgroundColor: "white" }}>
        <h2 className="py-4 textTitle">{t("general.technologies")}</h2>
        <ReactBootstrap.Container
          fluid
          className="w-100 px-5 m-0 d-flex justify-content-around align-items-center"
          style={{
            flexWrap: "wrap",
          }}
        >
          {
              tecArray.map((item, index) => {
                return (
                  <ReactBootstrap.Image
                    src={item}
                    className="my-5 px-2"
                    style={{ width: "auto", height: "7rem" }}
                    key={index}
                  />
                );
              })
            }
        </ReactBootstrap.Container>
      </div>
      <div className="py-2 px-5 d-flex flex-column" style={{ width: "100%" }}>
        <h3 className="py-4 textTitle">{t("general.description")}:</h3>
        <p className="py-4 description">
          {t("security.description")}
        </p>
        <h3 className="py-4 textTitle">{t("general.observations")}:</h3>
        <p className="py-4 description">
          {t("security.observations")}
        </p>
      </div>
    </ReactBootstrap.Container>
  );
}
