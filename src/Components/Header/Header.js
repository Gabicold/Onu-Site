import React from "react"
import * as S from "./Styles"
import Brasao from "../../midia/brasao.png"
export default function Header(){

    return(
        <S.SectionBanner>
            <S.BoxBanner>
                <S.Title>Sobre o nosso trabalho para alcançar os Objetivos de Desenvolvimento Sustentável em Santana Do Deserto</S.Title>
                <S.Logo src={Brasao} alt="brasao da prefeitura de santana"/>
             </S.BoxBanner>

        </S.SectionBanner>
        
    )
}