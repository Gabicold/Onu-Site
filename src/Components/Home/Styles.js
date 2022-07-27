import styled, {keyframes} from "styled-components";

export const BoxHome = styled.div`
margin-top:10vh;
margin-left:20vw;
`
export const SubTitle = styled.h2`
width:40vw;
font-size:2.5rem;
`
export const Text = styled.p`
width:40vw;
font-size:1.5rem;
`
export const BoxObjetivos = styled.section`
margin-top:5vh;
width:75%;
display:flex;
justify-content:space-around;
margin-bottom:10vh;
`
export const BoxImageAgua = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:12vw;
height:24vh;
background-color:#00A8FF;
border-radius:2vw;

`
export const BoxImageLampada = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:12vw;
height:24vh;
background-color:#E8BB00;
border-radius:2vw;
flex-direction:column;

`
export const BoxImageArvore = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:12vw;
height:24vh;
background-color:green;
border-radius:2vw;
flex-direction:column;

`
export const BoxImagePlaca = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:12vw;
height:24vh;
background-color:red;
border-radius:2vw;
flex-direction:column;

`
export const TextsBox = styled.section`
width:12vw;
height:5vh;
display:flex;
justify-content:center;
align-items:center;
`
export const NumberBox = styled.p`
font-size:3rem;
font-weight:bold;
color:white;
margin-right:0.5vw;
`
export const TextBox = styled.p`
font-size:1.5rem;
color:white;
font-weight:bold;
`
export const Image = styled.img`
width:5vw;
heigth:10vh;
`
export const A = styled.a`
text-decoration:none;
`

export const BoxButton = styled.section`
display:flex;
justify-content:center;
width:60vw;
margin-top:5vh;
`

const AnimaçaoDeBalanço = keyframes`
0%{top:85vh;}
50%{top:82vh;}
100%{top:85vh;}
`
export const Topo = styled.img`
width:4vw;
height:8vh;
cursor:pointer;
position:fixed;
top:85vh;
left:90vw;
animation:${AnimaçaoDeBalanço} 3s  infinite;
`

