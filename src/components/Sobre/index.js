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

					<p className="description-text">I am a frontend web developer. I can provide clean code and pixel perfect
					design. I also make website more & more interactive with web animations.
					</p>

					<div className="info dinamic-space">
						<div className="data-q">
							<p>Nome completo</p>
							<p>Idade</p>
							<p>Nacionalidade</p>
							<p>Linguas</p>
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
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Autem tenetur ratione quod.</p>
						</div>
					</div>
					<div className="s-item">
						<div className="item-icon d-flex">
						<FaReact size={50} color="#037fff" />
						<span>ReactJs</span>
						</div>
						<div className="division"></div>
						<div className="item-description">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Autem tenetur ratione quod.</p>
						</div>
					</div>
					<div className="s-item">
						<div className="item-icon d-flex">
						<DiPhotoshop size={50} color="#037fff" />
						<span>Edições</span>
						</div>
						<div className="division"></div>
						<div className="item-description">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Autem tenetur ratione quod.</p>
						</div>
					</div>
				</div>
				</div>

			</div>

    </div>
  )
}