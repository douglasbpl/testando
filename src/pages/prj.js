import React from 'react';
import { Projetos } from "../components/Projetos/projetos";
import { Helmet } from 'react-helmet';import { GlobalStyle } from ".././components/Global Style/styled";
import { Footer } from '../components/Footer';




export default function Prj() {

  return (
    <div>
      <GlobalStyle />
       <Helmet>
       <h1>Projeto Blog</h1>
      </Helmet>
      <Projetos/>
      <Footer/>       
    </div>
  )
}