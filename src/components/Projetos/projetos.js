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

  const { bthome, btcrd } = data.alldata.projetos[0]
  return (
    <div>

      <S.Container>
        <S.ContainerMenuFixed>
          <S.MenuFixedPM>
            <ul>
              <li><Link style={{ color: "white", textDecoration: "none" }} to="/" >{bthome}</Link></li>
              <li><Link style={{ color: "white", textDecoration: "none" }} to="/crd">{btcrd}</Link></li>

            </ul>
          </S.MenuFixedPM>
        </S.ContainerMenuFixed>

        <S.ContainerSlide>
          <SimpleSlider />
        </S.ContainerSlide>
      </S.Container >
    </div>
  )
}