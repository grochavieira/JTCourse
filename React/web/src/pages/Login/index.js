import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import axios from "../../services/axios";
import { Container } from "../../styles/GlobalStyles";
import { Title } from "./styled";

export default function Login() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get("/alunos");
      console.log(data);
    }
    getData();
  }, []);

  function handleClick(e) {
    e.preventDefault();

    dispatch({
      type: "BOTAO_CLICADO",
    });
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
