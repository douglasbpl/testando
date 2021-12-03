import React from 'react';
import { Projetos } from "../components/Projetos/projetos";
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
   box-sizing: border-box;
      }
`



export default function Prj() {

  return (
    <div>
      <GlobalStyle />
       <Helmet>
       <h1>Projeto Blog</h1>
      </Helmet>
      <Projetos/>       
    </div>
  )
}