import styled from "styled-components"
import React from "react"
import Cow from "./midia/cow-jam.gif"
const Batata = styled.img`
width:90vw;
height:90vh;
`
export default function App() {
  return (
    <>
      <Batata src={Cow}/>
    </>
  );
}

