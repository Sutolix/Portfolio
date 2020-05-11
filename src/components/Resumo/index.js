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

  const courses = [
  {
    name: 'CS50',
    data: '2020 - Presente',
    local: 'Harvard University (Online)',
    description: 'CS50 é uma introdução à Ciência da Computação abordando linguagens de programação como C e Python além de estruturas de dados e SQL. O curso é um dos mais populares de Harvard sendo executado com uma equipe de profissionais em conjunto ao renomado professor David J. Malan. Tem aulas presenciais mas que são gravadas e disponibilizadas oficialmente em formato de curso online com todo suporte e certificações.'
  },
  {
    name: 'JavaScript',
    data: '2020 - Presente',
    local: 'Udemy (Online)',
    description: 'Curso ministrado pela HCODE e com vários projetos reais como clones do WhatsApp e Dropbox usando Firebase e o que há de mais moderno no JavaScript. São mais de 200 aulas indo do básico ao avançado somando cerca de 38 horas de videoaulas. Express, Socket IO, Chart JS, NodeJS são algumas das tecnologias usadas durante o curso.'
  },
  {
    name: 'ReactJs',
    data: '2020 - 2020',
    local: 'Udemy (Online)',
    description: 'Este curso visa ensinar desde o básico ao avançado do ReactJs. Conta com alguns projetos como blog, videolocadora, buscador de repositório entre outros. É introduzido o uso de classes mas apresenta os novos recursos de Hooks mostrando sua maior simplicidade. É apresentado ao aluno o Firebase com seu banco de dados em tempo real e como isso deixa uma aplicação mais dinâmica.'
  },
  {
    name: 'HTML5, CSS3, Bootstrap 4',
    data: '2019 - 2019',
    local: 'Udemy (Online)',
    description: 'Curso completo de desenvolvimento web com criação de um site funcional e responsivo com loja e carrinho de compras. São mais de 75 aulas computando cerca de 13 horas de videoaulas. Angular, PHP com Slim Framework e MySQL também estão presentes.'
  },
  {
    name: 'Técnico em Informática',
    data: '2017 - 2018',
    local: 'Ponte Nova-MG',
    description: 'Curso presencial com matérias como Empreendedorismo, Análise e Projeto de Sistemas, Redes, Manutenção de Computadores, Banco de Dados, Linguagem Orientada a Objetos e Programação da Internet. No fim houveram trabalhos de conclusão de curso englobando todos os conhecimentos adiquiridos durante o período.'
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

        {courses.map((course) => (

          <div className="steps d-flex" key={course.name}>
            <div className="sumary">
              <h6>{course.data}</h6>
            </div>
            <div className="details">
              <h5 className="select-color">{course.name}</h5>
              <h6>{course.local}</h6>
              <p>{course.description}</p>
            </div>
          </div>

        ))}


  			</div>

        </div>
      </div>
    </div>
  )
}