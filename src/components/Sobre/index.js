import React from 'react'
import './sobre.css'
import { IoIosColorPalette } from 'react-icons/io'
import { FaReact, FaMoneyBillAlt } from 'react-icons/fa'
import { DiPhotoshop } from 'react-icons/di'
import { AiFillExclamationCircle } from 'react-icons/ai'

import { services } from '../Info'

import Background from '../Background'

export default function Sobre () {

  return (
  	<div className="page">
  		<Background/>

			<div className="content">

				<div className="about">
				<div className="title">
					<span>SOBRE MIM</span>
				</div>

				<div className="layer">
					<span>SOBRE MIM</span>
				</div>

				<div className="description">
					<div className="description-title">
						<h2>Meu nome é <span className="select-color">Tiago Reis</span></h2>
					</div>

					<p className="description-text">Sou um desenvolvedor front-end com alguns projetos próprios e estudante afinco de 
					ReactJS. 
					</p>

					<div className="info dinamic-space">
						<div className="data-q">
							<p>Nome completo</p>
							<p>Idade</p>
							<p>Nacionalidade</p>
							<p>Línguas</p>
							<p>Freelancer</p>
						</div>
						
						<div className="data-a">
							<p>: Tiago Silva dos Reis</p>
							<p>: 20</p>
							<p>: Brasileiro</p>
							<p>: Português, Inglês</p>
							<p>: Disponível</p>
						</div>

					</div>

					<a
						href="https://firebasestorage.googleapis.com/v0/b/portfolio-73930.appspot.com/o/cv%2Fcurriculo.pdf?alt=media&token=878eef9e-ad9b-4731-bdf8-36f181312af2"
						target="_blank"
						rel="noopener noreferrer">
						<button className="btn-default">Baixar currículo</button>	
					</a>
				</div>
				</div>

				<div className="services">
				<div className="title">
					<span>SERCIÇOS</span>
				</div>

				<div className="layer">
					<span>SERCIÇOS</span>
				</div>

				<div className="s-items">

					{services.map((service) => (

					<div className="s-item" key={service.title}>
						<div className="item-icon d-flex">
						{
							(service.title === 'Web Design') ? (<IoIosColorPalette size={50} color="#037fff" />) :
							(service.title === 'SPA com ReactJs') ? (<FaReact size={50} color="#037fff" />) :
							(service.title === 'Importações') ? (<FaMoneyBillAlt size={50} color="#037fff" />) :
							(service.title === 'Edições') ? (<DiPhotoshop size={50} color="#037fff" />) :
							(<AiFillExclamationCircle size={50} color="#CD0000" />)
						}
						<span>{service.title}</span>
						</div>
						<div className="division"></div>
						<div className="item-description">
							<p>{service.description}</p>
						</div>
					</div>

						))}

				</div>
				</div>

			</div>

    </div>
  )
}