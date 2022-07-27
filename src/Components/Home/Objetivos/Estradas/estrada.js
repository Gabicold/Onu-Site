import React from "react"
import * as S from "./styles"
import Placa from "../../../../midia/Placa.png"
export default function Agua (){

    return(
        <S.SectionBanner id="estrada">
            <S.BoxBanner>
                <section>
                    <S.SubTitle>Objetivos de Desenvolvimento Sustentável</S.SubTitle>
                    <S.Title>4</S.Title>
                    <S.Title>Melhora das estradas</S.Title>
                </section>
                <S.Logo src={Placa} alt="Placa"/>
             </S.BoxBanner>
             <section>
                <S.Text>Objetivo 1 - Melhorar a qualidade das estradas</S.Text>
                <ul>
                    <S.List>Até 2024, Diminuir a quantidade de buracos nas estradas</S.List>
                    <S.List>Até 2028, Iluminar as estradas para os bairros</S.List>
                    <S.List>até 2023, reparar as ruas</S.List>
                </ul>

             </section>
             
        </S.SectionBanner>
    )
}