import React from 'react'
import './home.css'

import { TiSocialGithubCircular, TiSocialLinkedinCircular } from 'react-icons/ti';
export default function Home () {

  return (
  	<div className="home">
   		<div className="context">
      	<h1>Olá, sou o <span className="select-color">Tiago Reis</span></h1>
      	<p>Um web developer focado no frontend. Faço códigos limpos e de fácil entendimento.
      	Além de websites com boa ambientação e de grande responsividade.
      	</p>
      	<div className="social-media">
      		<a href="https://github.com/Sutolix" title="Github"><TiSocialGithubCircular size={50} /></a>
      		<a href="https://www.linkedin.com/in/tiago-reis-y/" title="LinkedIn"><TiSocialLinkedinCircular size={50} /></a>
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
  )
}