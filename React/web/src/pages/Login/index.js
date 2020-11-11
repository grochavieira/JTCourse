import React from "react";

import { Container } from "../../styles/GlobalStyles";
import { Title } from "./styled";

export default function Login() {
  return (
    <Container>
      <h1>
        Login
        <Title isRed={false}>Oe</Title>
      </h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <button>Enviar</button>
    </Container>
  );
}
