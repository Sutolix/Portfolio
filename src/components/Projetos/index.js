import React from 'react'
import './projeto.css'

import Background from '../Background'

import kodlogo from '../../assets/img/kod-logo.png'
import weather from '../../assets/img/weather-logo.png'
import repo from '../../assets/img/repo-logo.png'
import fale from '../../assets/img/fale-logo.png'
import calcultor from '../../assets/img/calculator-logo.png'



export default function Projetos () {

  return (
  	<div className="page">
  		<Background/>

			<div className="content">
        <div className="title">
          <span>PROJETOS</span>
        </div>
        <div className="layer">
          <span>PROJETOS</span>
        </div>

        <div className="projects">

        	<div className="project d-flex">
        		<a href="https://kodfinder.netlify.app" target="_blank" rel="noopener noreferrer" title="Ver online">
        			<img src={kodlogo} alt="kodfinder bird" />
        		</a>
        		<div className="project-details">
        			<h5>KodFinder</h5>
        			<div className="division"></div>
        			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur
        			consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero.
        			Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p>
                    <a
                        href="https://github.com/Sutolix/KodFinder"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button>Acessar repositório</button></a>
        		</div>
        	</div>

        	<div className="project d-flex">
        		<a href="https://planosfalemais.netlify.com/" target="_blank" rel="noopener noreferrer" title="Ver online">
        			<img src={fale} alt="kodfinder bird" />
        		</a>
        		<div className="project-details">
        			<h5>FaleMais</h5>
        			<div className="division"></div>
        			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur
        			consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero.
        			Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p>
                    <a
                        href="https://github.com/Sutolix/fale_mais"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button>Acessar repositório</button></a>
                </div>
        	</div>

        	<div className="project d-flex">
        		<a href="https://reposearch.netlify.app/" target="_blank" rel="noopener noreferrer" title="Ver online">
        			<img src={repo} alt="kodfinder bird" />
        		</a>
        		<div className="project-details">
        			<h5>RepoSearch</h5>
        			<div className="division"></div>
        			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur
        			consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero.
        			Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p>
                    <a
                        href="https://github.com/Sutolix/repo_search"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button>Acessar repositório</button></a>
                </div>
        	</div>

        	<div className="project d-flex">
        		<a href="https://weatherappimap.netlify.app/" target="_blank" rel="noopener noreferrer" title="Ver online">
        		<img src={weather} alt="kodfinder bird" />
        		</a>
        		<div className="project-details">
        			<h5>Weather App</h5>
        			<div className="division"></div>
        			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur
        			consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero.
        			Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p>
                    <a
                        href="https://github.com/Sutolix/weather_app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button>Acessar repositório</button></a>
                </div>
        	</div>

        	<div className="project d-flex">
        		<a href="https://sutolix.github.io/calculator/" target="_blank" rel="noopener noreferrer" title="Ver online">
        			<img src={calcultor} alt="kodfinder bird" />
        		</a>
        		<div className="project-details">
        			<h5>Calculator</h5>
        			<div className="division"></div>
        			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur
        			consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero.
        			Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p>
                    <a
                        href="https://github.com/Sutolix/calculator"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button>Acessar repositório</button></a>
                </div>
        	</div>

        </div>

			</div>

    </div>
  )
}