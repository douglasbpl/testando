import React from "react";
import * as S from "./styled";
import { Link } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby'


export function Header() {  

  const data = useStaticQuery(graphql`
    query {
      alldata{
        headers {
          logoheader {
            url
          }
          bthome
          btsobre
          btform
          btcrd
          btprj
          btcontatos
        }
      }
    }
    `)

  const { logoheader, bthome , btsobre, btform, btcrd, btprj, btcontatos } = data.alldata.headers[0];

  return (
    <S.ContainerHeader id="Home">
        <S.ContainerMenuFixed>          
          <S.MenuFixed>
          <img src={logoheader.url}  alt="Minha foto em desenho" className="animated.flip"/>            
              <ul>
              <Link style={{ color: "white", textDecoration: "none" }} to="#Home"><li>{bthome}</li></Link>
              <Link style={{ color: "white", textDecoration: "none" }} to="#Sobre"><li>{btsobre}</li></Link>
              <Link style={{ color: "white", textDecoration: "none" }} to="#Formação"><li>{btform}</li></Link>             
              <Link style={{ color: "white", textDecoration: "none" }} to="/crd"><li>{btcrd}</li></Link>
              <Link style={{ color: "white", textDecoration: "none" }} to="/prj"><li>{btprj}</li></Link>    
              <Link style={{ color: "white", textDecoration: "none" }} to="#Contatos"><li>{btcontatos}</li></Link>   
              </ul>            
              </S.MenuFixed>         
          </S.ContainerMenuFixed>
    </S.ContainerHeader>
    );
}   