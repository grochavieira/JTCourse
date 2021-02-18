import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import axios from "../../services/axios";
import { Container } from "../../styles/GlobalStyles";
import { Title } from "./styled";
import * as exampleActions from "../../store/modules/example/actions";

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <Container>
      <h1>
        Login
        <Title isRed={false}>Oe</Title>
      </h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <button onClick={handleClick}>Enviar</button>
    </Container>
  );
}
