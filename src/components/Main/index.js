import React from 'react'
import './main.css'


import Menu from '../Menu'

import { TiSocialGithubCircular, TiSocialLinkedinCircular } from 'react-icons/ti';

export default function Main () {
  return (
  	<div className="container">
  	<Menu />
  	
  	<div className="main">
   		<div className="context">
      	<h1>Olá, sou o <span className="select-color">Tiago Reis</span></h1>
      	<p>Um web developer focado no frontend. Faço códigos limpos e de fácil entendimento.
      	Além de websites com boa ambientação e de grande responsividade.
      	</p>
      	<div className="social-media">
      		<a href="https://github.com/Sutolix"><TiSocialGithubCircular size={50}/></a>
      		<a href="https://www.linkedin.com/in/tiago-reis-y/"><TiSocialLinkedinCircular size={50}/></a>
      	</div>
    	</div>

			<div className="area" >
         <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
    	</div>
    </div> 
    </div>
  )
}
