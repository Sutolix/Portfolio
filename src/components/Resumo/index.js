import React from 'react'
import './resume.css'

import { MdSchool } from 'react-icons/md'

import Background from '../Background'

export default function Resumo () {

  return (
  	<div className="page">
  		<Background />

  		<div className="content">

  		  <div className="skills">

  		  </div>

  		  <div className="experience">

				<div className="title">
					<span>RESUMO</span>
  			</div>
  			<div className="layer">
					<span>RESUMO</span>
				</div>
  			<div className="subtitle">
  				<h5 className="d-flex"><MdSchool size={30} color="#fff"/>Educational Qualifications</h5>
  			</div>

  			<div className="historic">
  				<div className="steps d-flex">
  					<div className="sumary">
  						<h6> 2020 - Present</h6>
  					</div>
  					<div className="details">
  						<h5 className="select-color"> CS50X </h5>
  						<h6>Harvard University</h6>
  						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
  						Quas, magni mollitia, aspernatur consequatur accusamus vero
  						eum facere exercitationem velit suscipit ipsam placeat libero.
  						Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p>
  					</div>
  				</div>

          <div className="steps d-flex">
            <div className="sumary">
              <h6> 2020 - Present</h6>
            </div>
            <div className="details">
              <h5 className="select-color"> JavaScript </h5>
              <h6>Udemy</h6>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quas, magni mollitia, aspernatur consequatur accusamus vero
              eum facere exercitationem velit suscipit ipsam placeat libero.
              Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p>
            </div>
          </div>

          <div className="steps d-flex">
            <div className="sumary">
              <h6> 2020 - 2020</h6>
            </div>
            <div className="details">
              <h5 className="select-color"> ReactJs </h5>
              <h6>Udemy</h6>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quas, magni mollitia, aspernatur consequatur accusamus vero
              eum facere exercitationem velit suscipit ipsam placeat libero.
              Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p>
            </div>
          </div>

          <div className="steps d-flex">
            <div className="sumary">
              <h6> 2019 - 2019</h6>
            </div>
            <div className="details">
              <h5 className="select-color"> HTML, CSS, Bootstrap </h5>
              <h6>Udemy</h6>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quas, magni mollitia, aspernatur consequatur accusamus vero
              eum facere exercitationem velit suscipit ipsam placeat libero.
              Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p>
            </div>
          </div>

          <div className="steps d-flex">
            <div className="sumary">
              <h6> 2017 - 2018</h6>
            </div>
            <div className="details">
              <h5 className="select-color"> Técnico em Informática </h5>
              <h6>Polivalente (Ponte Nova)</h6>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quas, magni mollitia, aspernatur consequatur accusamus vero
              eum facere exercitationem velit suscipit ipsam placeat libero.
              Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p>
            </div>
          </div>


  			</div>

        </div>
      </div>
    </div>
  )
}