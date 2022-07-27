import React from "react"
import * as S from "./Styles"
import Agua from "../../midia/Agua.png"
import Arvore from "../../midia/Arvore.png"
import Lampada from "../../midia/Lampada.png"
import Placa from "../../midia/Placa.png"
import AguaComponent from "./Objetivos/Agua/Agua"
import Energia from "./Objetivos/Energia/energia"
import Ambiente from "./Objetivos/Ambiente/ambiente"
import Estradas from "./Objetivos/Estradas/estrada"
import Seta from "../../midia/setacima.png"
export default function Home(){


    return(
        <S.BoxHome>
            <section>
                <S.SubTitle>Os Objetivos de Desenvolvimento Sustentável em Santana do Deserto</S.SubTitle>
                <S.Text>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.</S.Text>
            </section>
            <S.BoxObjetivos>
                <S.A href="#Agua"><S.BoxImageAgua>
                    <S.TextsBox>
                        <S.NumberBox>1</S.NumberBox>
                        <S.TextBox>Agua Limpa</S.TextBox>
                    </S.TextsBox>
                    <S.Image src={Agua}/>
                </S.BoxImageAgua></S.A>
                <S.A href="#Energia"><S.BoxImageLampada>
                    <S.TextsBox>
                        <S.NumberBox>2</S.NumberBox>
                        <S.TextBox>Energia</S.TextBox>
                    </S.TextsBox>
                    <S.Image src={Lampada}/>
                    </S.BoxImageLampada></S.A>
                <S.A href="#Ambiente"><S.BoxImageArvore>
                    <S.TextsBox>
                        <S.NumberBox>3</S.NumberBox>
                        <S.TextBox>Meio Ambiente</S.TextBox>
                    </S.TextsBox>
                    <S.Image src={Arvore}/>
                </S.BoxImageArvore></S.A>
                <S.A href="#estrada"><S.BoxImagePlaca>
                    <S.TextsBox>
                        <S.NumberBox>4</S.NumberBox>
                        <S.TextBox>Estradas</S.TextBox>
                    </S.TextsBox>
                    <S.Image src={Placa}/>
                </S.BoxImagePlaca></S.A>
            </S.BoxObjetivos>
            <section>
            <S.SubTitle>Objetivos Sustentaveis</S.SubTitle>
                <AguaComponent/>
                <Energia />
                <Ambiente/>
                <Estradas/>
                <S.BoxButton>
                    <a href="#header"><S.Topo src={Seta} alt="seta para voltar ao topo"/></a>
                </S.BoxButton>
                
            </section>
        </S.BoxHome>
    )
}