import styled from "styled-components";

export const Title = styled.h1`
  color: ${({isRed}) => (isRed ? "red" : "blue")};
`;
