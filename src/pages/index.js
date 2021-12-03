import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';
// import Darkmode from '../components/Darkmode/darkmode';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
   box-sizing: border-box;
   background: #0F2027;  
   background: -webkit-linear-gradient(to left, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
   background: linear-gradient(to left, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
     }
  

`


export default function Index() {

  return (
    <div>
      <GlobalStyle />
      <Helmet>
      <h1>Projeto Blog</h1>
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}