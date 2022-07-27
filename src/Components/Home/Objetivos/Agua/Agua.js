import React from "react"
import * as S from "./styles"
import Gota from "../../../../midia/Agua.png"
export default function Agua (){

    return(
        <S.SectionBanner id="Agua">
            <S.BoxBanner>
                <section>
                    <S.SubTitle>Objetivos de Desenvolvimento Sustentavel</S.SubTitle>
                    <S.Title>1</S.Title>
                    <S.Title>Melhora da qualidade da agua</S.Title>
                </section>
                <S.Logo src={Gota} alt="Gota de agua"/>
             </S.BoxBanner>
             <section>
                <S.Text>Objetivo 1 - Melhorar a qualidade da agua para a população</S.Text>
                <ul>
                    <S.List>Até 2025, Melhorar a qualidade da agua destribuida para a população.</S.List>
                    <S.List>Até 2025, Melhorar a qualidade dos canos para reduzidos os vazamentos.</S.List>
                </ul>

             </section>
             
        </S.SectionBanner>
    )
}