import React from "react";
import Main from "../template/Main";

export default (props) => (
  <Main
    icon="home"
    title="Inicio"
    subtitle="Segundo projeto do capitulo de react"
  >
    <div className="display-4">Bem vindo</div>
    <hr />
    <p className="mb-0">
      Sistema para exemplificar a constução de uma aplicação react desde o
      inicio
    </p>
  </Main>
);
