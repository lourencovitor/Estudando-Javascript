import React from "react";
import { childrenWhitProps } from "../utils/utils";

export default (props) => (
  <div>
    <h1>
      {props.nome} {props.sobrenome}
    </h1>
    <h1>Filhos</h1>
    <ul>{childrenWhitProps(props)}</ul>
  </div>
);
