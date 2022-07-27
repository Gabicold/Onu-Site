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
                <S.Text>Objetivo 1 - Reduzir os impactos no meio ambiente</S.Text>
                <ul>
                    <S.List>Até 2029, Diminuir as queimadas nos morros</S.List>
                    <S.List>Até 2026, Criar canteiros onde se concentra a maior quantidade de lixo</S.List>
                </ul>

             </section>
             
        </S.SectionBanner>
    )
}