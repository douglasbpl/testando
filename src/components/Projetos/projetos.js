import React from "react"
import { Link } from "gatsby"
import * as S from "./styled";
import SimpleSlider from "./slide"
import { graphql, useStaticQuery } from 'gatsby';


export function Projetos() {
  const data = useStaticQuery(graphql`
        query {
            alldata{
                projetos {
                    bthome
                    btcrd
                    ttlprj
                }                    
            }
        }
    `)

    const { bthome, btcrd, ttlprj} = data.alldata.projetos[0]
  return (
    <div>
        
       <S.Container> 
              <S.ContainerMenuFixed>
        <S.MenuFixedPM>
          <ul>
            <Link style={{ color: "white", textDecoration: "none" }} to="/" ><li>Home</li></Link>
            <Link  style={{ color: "white", textDecoration: "none" }} to="/crd"><li>Curiosidades</li></Link>
            
          </ul>
        </S.MenuFixedPM>
      </S.ContainerMenuFixed>        
                           
                <S.ContainerSlide>               
                <SimpleSlider/>
                </S.ContainerSlide>                          
        </S.Container >
    </div>
  )
}