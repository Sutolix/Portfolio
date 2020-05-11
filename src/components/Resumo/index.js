import React from 'react'
import './resume.css'

import { MdSchool } from 'react-icons/md'
import Background from '../Background'
import Loading from '../Loading'

export default function Resumo () {

  const skills = [
  {
    name: 'HTML5',
    proficiency: '90'
  },
  {
    name: 'CSS3',
    proficiency: '87'
  },
  {
    name: 'ReactJs',
    proficiency: '70'
  },
  {
    name: 'Bootstrap',
    proficiency: '67'
  },
  {
    name: 'Git',
    proficiency: '60'
  },
  {
    name: 'Photoshop',
    proficiency: '50'
  },
  ]

  return (
  	<div className="page">
  		<Background />

  		<div className="content">

  		  <div className="abilities">
          <div className="title">
            <span>HABILIDADES</span>
          </div>
          <div className="layer">
            <span>HABILIDADES</span>
          </div>
          <div className="skills">
            {skills.map((skill) => (
              <div className="skill" key={skill.name}>
                <h5>{skill.name}</h5>
                <div className="skill-graphic d-flex">
                  <span>{skill.proficiency}%</span>
                  <Loading proficiency={skill.proficiency} />
                </div>
              </div>
            ))}
          </div>
  		  </div>

  		  <div className="experience">

				<div className="title">
					<span>RESUMO</span>
  			</div>
  			<div className="layer">
					<span>RESUMO</span>
				</div>

  			<div className="subtitle">
  				<h5 className="d-flex"><MdSchool size={30} color="#fff"/>Estudos</h5>
  			</div>

  			<div className="historic">
  				<div className="steps d-flex">
  					<div className="sumary">
  						<h6> 2020 - Present</h6>
  					</div>
  					<div className="details">
  						<h5 className="select-color"> CS50 </h5>
  						<h6>Harvard University (Online)</h6>
  						<p>CS50 é uma introdução à Ciência da Computação abordando linguagens de programação como
                C e Python além de estruturas de dados e SQL. O curso é um dos mais populares de Harvard
                sendo executado com uma equipe de profissionais em conjunto ao renomado professor David J.
                Malan. Tem aulas presenciais mas que são gravadas e disponibilizadas oficialmente em formato
                de curso online com todo suporte e certificações. </p>
  					</div>
  				</div>

          <div className="steps d-flex">
            <div className="sumary">
              <h6> 2020 - Present</h6>
            </div>
            <div className="details">
              <h5 className="select-color"> JavaScript </h5>
              <h6>Udemy (Online)</h6>
              <p>Curso ministrado pela HCODE e com vários projetos reais como clones do WhatsApp e Dropbox usando
                Firebase e o que há de mais moderno no JavaScript. São mais de 200 aulas indo do básico ao avançado
                somando cerca de 38 horas de videoaulas. Express, Socket IO, Chart JS, NodeJS são algumas das
                tecnologias usadas durante o curso.
              </p>
            </div>
          </div>

          <div className="steps d-flex">
            <div className="sumary">
              <h6> 2020 - 2020</h6>
            </div>
            <div className="details">
              <h5 className="select-color"> ReactJs </h5>
              <h6>Udemy (Online)</h6>
              <p>Este curso visa ensinar desde o básico ao avançado do ReactJs. Conta com alguns projetos como blog,
                videolocadora, buscador de repositório entre outros. É introduzido o uso de classes mas apresenta os novos
                recursos de Hooks mostrando sua maior simplicidade. É apresentado ao aluno o Firebase com seu banco de dados
                em tempo real e como isso deixa uma aplicação mais dinâmica.
              </p>
            </div>
          </div>

          <div className="steps d-flex">
            <div className="sumary">
              <h6> 2019 - 2019</h6>
            </div>
            <div className="details">
              <h5 className="select-color"> HTML5, CSS3, Bootstrap 4</h5>
              <h6>Udemy (Online)</h6>
              <p>Curso completo de desenvolvimento web com criação de um site funcional e responsivo com loja e carrinho de compras.
                São mais de 75 aulas computando cerca de 13 horas de videoaulas. Angular, PHP com Slim Framework e MySQL também
                estão presentes.</p>
            </div>
          </div>

          <div className="steps d-flex">
            <div className="sumary">
              <h6> 2017 - 2018</h6>
            </div>
            <div className="details">
              <h5 className="select-color"> Técnico em Informática </h5>
              <h6>Polivalente (Ponte Nova-MG)</h6>
              <p>Curso presencial com matérias como Empreendedorismo, Análise e Projeto de Sistemas, Redes, Manutenção de Computadores,
              Banco de Dados, Linguagem Orientada a Objetos e Programação da Internet. No fim houveram trabalhos de conclusão de curso
              englobando todos os conhecimentos adiquiridos durante o período.</p>
            </div>
          </div>


  			</div>

        </div>
      </div>
    </div>
  )
}