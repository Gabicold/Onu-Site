import React from "react"
import * as S from "./styles"
import Lampada from "../../../../midia/Lampada.png"
export default function Agua (){

    return(
        <S.SectionBanner id="Energia">
            <S.BoxBanner>
                <section>
                    <S.SubTitle>Objetivos de Desenvolvimento Sustentavel</S.SubTitle>
                    <S.Title>2</S.Title>
                    <S.Title>Melhora da Energia elétrica</S.Title>
                </section>
                <S.Logo src={Lampada} alt="Gota de agua"/>
             </S.BoxBanner>
             <section>
                <S.Text>Objetivo 1 - Melhorar a energia deistribuída.</S.Text>
                <ul>
                    <S.List>Até 2030, Resolver os problemas de queda de energia frenquêntes na cidade.</S.List>
                    <S.List>Até 2022, consertar as lampadas da rua, sao queimadas com frequência.</S.List>
                </ul>

             </section>
             
        </S.SectionBanner>
    )
}