import React from "react"
import { createGlobalStyle } from "styled-components"
import Home from "./Components/Home/Home"
import Header from "./Components/Header/Header"

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  scroll-behavior: smooth;
  
}
`
export default function App() {
  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Home/>
    </div>
  )
}

