import React from "react";
import ReactDOM from "react-dom";
import Pai from "./components/Pai";
import Filho from "./components/Filho";

ReactDOM.render(
  <div>
    <Pai nome="Vitor" sobrenome="Lourenço">
      {/* Como passo os componentes Filhos aqui?  */}
      <Filho nome="Paulo" />
      <Filho nome="Junior" />
      <Filho nome="Jasmine" />
    </Pai>
  </div>,
  document.getElementById("root")
);
