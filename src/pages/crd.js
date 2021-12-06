import React from 'react';
import { Curiosidades } from "../components/Curiosidades/curiosidades";
import { Helmet } from 'react-helmet';
import { GlobalStyle } from ".././components/Global Style/styled";
import { Footer } from '../components/Footer';


export default function Crd() {

  return (
    <div>
      <GlobalStyle />
       <Helmet>
       <h1>Projeto Blog</h1>
      </Helmet>
      {/* <Curiosidades/> */}
      <Footer/>
    </div>
  )
}