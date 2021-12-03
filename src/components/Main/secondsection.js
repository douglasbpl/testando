import React from "react";
import * as S from "./styled";
import MinhaFoto from "../../images/minhafoto.jpg"


export default function SecondSection() {

  return (
    <S.ContainerSecondSection id="Formação">
      <h2>Formação</h2>
      <div>
        <img src={MinhaFoto} alt="Primeira curiosidade" />
        <p>Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. Delegadis gente finis, bibendum egestas augue arcu ut est. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Copo furadis é disculpa de bebadis, arcu quam euismod magna.</p>
      </div>
      <div>
      <p>Mussum Ipsum, cacilds vidis litro abertis. Aenean aliquam molestie leo, vitae iaculis nisl. Atirei o pau no gatis, per gatis num morreus. Cevadis im ampola pa arma uma pindureta. Leite de capivaris, leite de mula manquis sem cabeça.</p>
        <img src={MinhaFoto} alt="Segunda curiosidade" />        
      </div>
    </S.ContainerSecondSection>
  )


}