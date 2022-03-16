import React from 'react';
import images  from "../imageIndex";

const { Monitoreo, Comercio, Seguridad, ComercioApp, LogoCss, LogoHtml, LogoJavascript, LogoNode, LogoReact, LogoRedux, LogoGithub, LogoLinkedin} = images
const tecArray = [LogoHtml, LogoCss, LogoJavascript, LogoNode, LogoReact, LogoRedux]

export default function tecnologias() {
  return (
    <div
          className="w-100 p-0 m-0 d-flex justify-content-around align-items-center"
          style={{
            flexWrap: "wrap",
            borderStyle: "solid",
            borderLeft: 3,
            borderRight: 3,
            borderColor: "#d3d3d3",
          }}
        >
          {tecArray.map((item) => (
            <img
              src={item}
              className="my-5"
              style={{ width: "auto", height: "7rem" }}
            />
          ))}
        </div>
  )
}
