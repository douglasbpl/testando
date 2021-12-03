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
              <li><Link to="#Home">{bthome}</Link></li>
              <li><Link to="#Sobre">{btsobre}</Link>  </li>
              <li><Link to="#Formação">{btform}</Link>      </li>                
              <li><Link to="/crd">{btcrd}</Link></li>
              <li><Link to="/prj">{btprj}</Link>       </li>       
              <li><Link to="#Contatos">{btcontatos}</Link> </li>        
              </ul>            
              </S.MenuFixed>         
          </S.ContainerMenuFixed>
    </S.ContainerHeader>
    );
}   