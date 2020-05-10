import React from 'react'
import styled, { keyframes } from 'styled-components'

	const slide = keyframes`
  	0% {
     	width: 0;
   	}
   	100% {
     	width: 100%;
   	}
	 `
	const LoadingBar = styled.div`
  width: 300px;
  height: 4px;
  background: #ccc;
  position: relative;
    &::before{
    content: '';
    position: absolute;
    height: 4px;
    max-width: ${props => props.proficiency*3}px;
    background: #037fff;
	 	animation: 1s ${slide} ease-out;
	 	animation-fill-mode : forwards;
  }
	`
//props.proficiency*3 porque o width da barra é 300, ou seja, (proficiency * 300)/100. Simplificando,
//proficiency * 3

export default function Loading ({proficiency}) {

/*
	As constantes estão fora da função porque não é certo chamar styled components dentro de outro componente(função),
	estavam retornando avisos sobre
*/

	//passando a proficiency para o LoadingBar ter acesso a ele.
	return (<LoadingBar proficiency={proficiency}/>);
}
