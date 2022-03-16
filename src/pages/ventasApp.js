import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/proyects.css";
import images  from "../imageIndex";
import { useTranslation } from "react-i18next";

const {IvaloMA1, IvaloMA2, LogoCss, LogoTypescript, LogoNode, LogoReact, LogoMySQL} = images
const tecArray = [LogoCss, LogoTypescript, LogoNode, LogoReact, LogoMySQL]


export default function VentasApp() {
  const { t } = useTranslation("global");

  return (
    <ReactBootstrap.Container
      fluid
      className="m-0 p-0 d-flex flex-column"
      style={{
        height: "60%",
        backgroundColor: "#F5F5F5",
        paddingLeft: "15rem",
        paddingRight: "15rem",
      }}
    >
      <div
        className="p-0 m-0 w-100 h-100"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <h2 className="py-4 textTytle">{t("navbar.ivaloMA")}</h2>
        <ReactBootstrap.Container
          fluid
          className="py-2 px-5 h-100 text-align-center d-flex justify-content-around"
        >
          <ReactBootstrap.Image
            src={IvaloMA1}
            style={{ width: "30%", height: "80%" }}
          />
          <ReactBootstrap.Image
            src={IvaloMA2}
            style={{ width: "30%", height: "80%" }}
          />
        </ReactBootstrap.Container>
      </div>
      <div style={{ backgroundColor: "white" }}>
        <h2 className="py-4 textTytle">{t("general.technologies")}</h2>
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
      <div
        className="py-2 px-5 d-flex flex-column"
        style={{ width: "100%" }}
      >
        <h3 className="py-4 textTytle">{t("general.description")}:</h3>
        <p className="py-4 description">
          {t("ivaloMA.description")}
        </p>
        <h3 className="py-4 textTytle">{t("general.observations")}:</h3>
        <p className="py-4 description">
          {t("ivaloMA.observations")}
        </p>
      </div>
    </ReactBootstrap.Container>
  );
}
