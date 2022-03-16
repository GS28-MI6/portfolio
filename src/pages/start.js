import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WebappCard from "../components/webappCard";
import images  from "../imageIndex";
import "../styles/start.css";
import PhoneappCard from "../components/phoneappCard";
import { useTranslation } from "react-i18next";


const { Monitoreo1, IvaloWA2, Seguridad1, IvaloMA1, LogoGithub, LogoLinkedin} = images
const githubLink = "https://github.com/GS28-MI6";
const linkedinLink = "https://www.linkedin.com/in/gabriel-sosa-336aba201/";

export default function Start() {
  const { t } = useTranslation("global");

    return (
      <div className="appContainer">
        <div
          className="p-0 m-0 w-100 backgroundImage"
        >
          <div>
            <h1 style={{ color: "#fff" }}>Gabriel Alessandro Sosa</h1>
            <h2 style={{ color: "#fff" }}>Fullstack developer</h2>
          </div>
          <div className="w-75 mt-5">
            <h3 style={{ color: "#fff" }}>
              {t("start.phrase")}
            </h3>
          </div>
          <div className="glContainer p-5">
            <div className="logoWrapper" onClick={() => (window.open(githubLink, '_blank'))}>
              <img
                src={LogoGithub}
                className=""
                alt="github"
                style={{ width: "60%", aspectRatio: 1/1 }}
              />
            </div>
            <div className="logoWrapper" onClick={() => (window.open(linkedinLink, '_blank'))}>
              <img
              src={LogoLinkedin}
              alt="linkedin"
              className=""
              style={{ width: "60%", aspectRatio: 1/1 }}
              />
            </div>
          </div>
        </div>
        <div className="proyectsContainer">
          <h2 className="mt-5">
            {t("start.proyects")}
          </h2>
          <div className="my-5 mx-0">
            <div className="d-flex justify-content-md-center mt-5 row">
              <WebappCard name={t("navbar.monitCenter")} src={Monitoreo1} link="/monitoreo"/>
              <WebappCard name={t("navbar.ivaloWA")} src={IvaloWA2} link="/ventas"/>
              <PhoneappCard name={t("navbar.panicApp")} src={Seguridad1} link="/seguridad" desc={t("start.panicAppDesc")}/>
              <PhoneappCard name={t("navbar.ivaloMA")} src={IvaloMA1} link="/ventasApp" desc={t("start.ivaloMADesc")}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
