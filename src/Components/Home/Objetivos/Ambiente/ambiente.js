import React from "react"
import * as S from "./styles"
import Arvore from "../../../../midia/Arvore.png"
export default function Agua (){

    return(
        <S.SectionBanner id="Ambiente">
            <S.BoxBanner>
                <section>
                    <S.SubTitle>Objetivos de Desenvolvimento Sustentável</S.SubTitle>
                    <S.Title>3</S.Title>
                    <S.Title>Reduzir os impactos no meio ambiente</S.Title>
                </section>
                <S.Logo src={Arvore} alt="Gota de agua"/>
             </S.BoxBanner>
             <section>
                <h2>Objetivo 1 - Reduzir os impactos no meio ambiente</h2>
                <ul>
                    <li>Até 2029, Diminuir as queimadas nos morros</li>
                    <li>Até 2026, Criar canteiros onde se concentra a maior quantidade de lixo</li>
                </ul>

             </section>
             
        </S.SectionBanner>
    )
}