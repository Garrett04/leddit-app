import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

 const Loader = styled.div`
  border-width: 0.5rem;
  border-style: solid;
  border-color: gray blue gray blue;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  margin: auto;
  position: relative;
  -webkit-animation: spin 2s infinite;
  animation: spin 2s infinite;

  &:before {
    top: 0.063rem;
  }

  &:after {
    bottom: 0.063rem;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;


export function LoadingSpinner() {

  return (
    <Container>
         <Loader />
    </Container>
  );

}