import React from 'react'
import './sobre.css'
import { IoIosColorPalette } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import { DiPhotoshop } from 'react-icons/di'

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

				<div className="s-items d-flex">
					<div className="s-item">
						<div className="item-icon d-flex">
						<IoIosColorPalette size={50} color="#037fff" />
						<span>Web Design</span>
						</div>
						<div className="division"></div>
						<div className="item-description">
							<p>Criação de layouts intuitivos para sites e apps.</p>
						</div>
					</div>
					<div className="s-item">
						<div className="item-icon d-flex">
						<FaReact size={50} color="#037fff" />
						<span>ReactJs</span>
						</div>
						<div className="division"></div>
						<div className="item-description">
							<p>Aplicações em SPA para uma navegação mais fluida sem loading.</p>
						</div>
					</div>
					<div className="s-item">
						<div className="item-icon d-flex">
						<DiPhotoshop size={50} color="#037fff" />
						<span>Edições</span>
						</div>
						<div className="division"></div>
						<div className="item-description">
							<p>Remoção de objetos indesejados em imagens e fotos.</p>
						</div>
					</div>
				</div>
				</div>

			</div>

    </div>
  )
}