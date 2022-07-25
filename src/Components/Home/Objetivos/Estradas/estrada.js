import React from "react"
import * as S from "./styles"
import Placa from "../../../../midia/Placa.png"
export default function Agua (){

    return(
        <S.SectionBanner id="Ambiente">
            <S.BoxBanner>
                <section>
                    <S.SubTitle>Objetivos de Desenvolvimento Sustentável</S.SubTitle>
                    <S.Title>4</S.Title>
                    <S.Title>Melhora das estradas</S.Title>
                </section>
                <S.Logo src={Placa} alt="Placa"/>
             </S.BoxBanner>
             <section>
                <h2>Objetivo 1 - Melhorar a qualidade das estradas</h2>
                <ul>
                    <li>Até 2024, Diminuir a quantidade de buracos nas estradas</li>
                    <li>Até 2028, Iluminar as estradas para os bairros</li>
                    <li>até 2023, reparar as ruas</li>
                </ul>

             </section>
             
        </S.SectionBanner>
    )
}