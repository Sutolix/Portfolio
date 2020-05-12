import React from 'react'
import './resume.css'

import { MdSchool } from 'react-icons/md'
import { FaSuitcase } from 'react-icons/fa'

import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiReact, DiGit, DiPhotoshop } from 'react-icons/di'
import { BsBootstrap } from 'react-icons/bs'

import Background from '../Background'
import Loading from '../Loading'

import {skills, courses, works} from '../Info'

export default function Resumo () {

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
                <div className="d-flex align-center">
                  {
                    (skill.name === 'HTML5') ? (<AiFillHtml5 size={22} color="#fff" />) :
                    (skill.name === 'CSS3') ? (<DiCss3 size={22} color="#fff" />) :
                    (skill.name === 'ReactJs') ? (<DiReact size={22} color="#fff" />) :
                    (skill.name === 'Bootstrap') ? (<BsBootstrap size={22} color="#fff" />) :
                    (skill.name === 'Git') ? (<DiGit size={22} color="#fff" />) :
                    (<DiPhotoshop size={22} color="#fff" />)
                  }
                  <h5>{skill.name}</h5>
                </div>
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
          <h5 className="d-flex"><FaSuitcase size={30} color="#fff"/>Trabalhos</h5>
        </div>

        <div className="historic">

        {works.map((work) => (

          <div className="steps" key={work.name}>
            <div className="sumary">
              <h6>{work.data}</h6>
            </div>
            <div className="details">
              <h5 className="select-color">{work.name}</h5>
              <h6>{work.local}</h6>
              <p>{work.description}</p>
            </div>
          </div>

        ))}


        </div>

  			<div className="subtitle">
  				<h5 className="d-flex"><MdSchool size={30} color="#fff"/>Estudos</h5>
  			</div>

  			<div className="historic">

        {courses.map((course) => (

          <div className="steps" key={course.name}>
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