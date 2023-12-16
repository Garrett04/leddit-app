import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

 const Loader = styled.div`
  border-width: 0.5rem;
  border-style: solid;
  border-color: gray blue gray blue;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
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

//Create functional component
export function LoadingSpinner() {

  return (
    <Container>
         <Loader />
    </Container>
  );

}