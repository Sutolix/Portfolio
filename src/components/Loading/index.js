import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function Loading ({proficiency}) {
	const slide = keyframes`
  	0% {
     	width: 0;
   	}
   	100% {
     	width: ${(proficiency*3)}px;
   	}
	 `

	const LoadingBar = styled.div`
  width: 300px;
  height: 4px;
  background: #ccc;
    &::before{
    content: '';
    position: absolute;
    height: 4px;
    background: #037fff;
	 	animation: 1s ${slide} ease-out;
	 	animation-fill-mode : forwards;
  }
	`
	return (<LoadingBar />);
}