import React from 'react'
import './home.css'

import { TiSocialGithubCircular, TiSocialLinkedinCircular } from 'react-icons/ti';
export default function Home () {

  return (
  	<div className="home">
   		<div className="context">
      	<h1>Olá, sou o <span className="select-color">Tiago Reis</span></h1>
      	<p>Um desenvolvedor web focado no frontend. Faço layouts limpos e de fácil usabilidade.<br/>
      	Além de websites com boa ambientação e de grande responsividade.
      	</p>
      	<div className="social-media">
      		<a href="https://github.com/Sutolix" target="_blank" rel="noopener noreferrer" title="Github"><TiSocialGithubCircular size={50} /></a>
      		<a href="https://www.linkedin.com/in/tiago-reis-y/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><TiSocialLinkedinCircular size={50} /></a>
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