import React from 'react'
import './projeto.css'

import Background from '../Background'

import kodlogo from '../../assets/img/kod-logo.png'
import weather from '../../assets/img/weather-logo.png'
import hero from '../../assets/img/hero-logo.png'
import repo from '../../assets/img/repo-logo.png'
import fale from '../../assets/img/fale-logo.png'
import calcultor from '../../assets/img/calculator-logo.png'

export default function Projetos () {
  return (
    <div className='page'>
      <Background />

      <div className='content'>
        <div className='title'>
          <span>PROJETOS</span>
        </div>
        <div className='layer'>
          <span>PROJETOS</span>
        </div>

        <div className='projects'>

          <div className='project d-flex'>
            <a href='https://kodfinder.netlify.app' target='_blank' rel='noopener noreferrer' title='Ver online' className='siteonline'>
              <img src={kodlogo} alt='kodfinder bird' />
            </a>
            <div className='project-details'>
              <h5>KodFinder</h5>
              <div className='division' />
              <p>Um site para reunir programadores da minha região (Ponte Nova -MG). Infelizmente a cultura dev
                        que temos por aqui é muito fraca, então a proposta desse projeto é criar um lugar para nos conhecermos
                        melhorando nosso networking tal qual fortalecer a presença de nossa profissão.
              </p>
              <a
                href='https://github.com/Sutolix/KodFinder'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='btn-default'>Acessar repositório</button>
              </a>
            </div>
          </div>

          <div className='project d-flex'>
            <a href='https://planosfalemais.netlify.app' target='_blank' rel='noopener noreferrer' title='Ver online' className='siteonline'>
              <img src={fale} alt='phone' />
            </a>
            <div className='project-details'>
              <h5>FaleMais</h5>
              <div className='division' />
              <p>Um sistema que calcula os preços de pagamento de um usuário com e sem a adesão de uma promoção de uma
                        operadora telefônica.
              </p>
              <a
                href='https://github.com/Sutolix/fale_mais'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='btn-default'>Acessar repositório</button>
              </a>
            </div>
          </div>

          <div className='project d-flex'>
            <a href='https://ongbethehero.netlify.app' target='_blank' rel='noopener noreferrer' title='Ver online' className='siteonline'>
              <img src={hero} alt='hero' />
            </a>
            <div className='project-details'>
              <h5>BeTheHero</h5>
              <div className='division' />
              <p>Uma aplicação para ONGs se cadastrarem e exporem casos pedindo ajuda com doações. Quem se interessar em ajudar
                  algum dos casos pode entrar em contato com a ONG em questão pelo WhatsApp e ter mais detalhes.
              </p>
              <a
                href='https://github.com/Sutolix/BeTheHero-SemanaOmniStack11'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='btn-default'>Acessar repositório</button>
              </a>
              <a
                href='https://firebasestorage.googleapis.com/v0/b/portfolio-73930.appspot.com/o/aplications%2Fbethehero-v1.2.apk?alt=media&token=af1bac14-31d1-4018-9081-861eba76e4c8'
              >
                <button className='btn-app'>Baixar aplicativo</button>
              </a>
            </div>
          </div>

          <div className='project d-flex'>
            <a href='https://reposearch.netlify.app' target='_blank' rel='noopener noreferrer' title='Ver online' className='siteonline'>
              <img src={repo} alt='github' />
            </a>
            <div className='project-details'>
              <h5>RepoSearch</h5>
              <div className='division' />
              <p>Digite o caminho de um repositório do Github e receba informações sobre. Você verá descrição, linguagem utilizada e issues abertas e fechadas. <br />
                    Exemplo de pesquisa: facebook/react
              </p>
              <a
                href='https://github.com/Sutolix/repo_search'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='btn-default'>Acessar repositório</button>
              </a>
            </div>
          </div>

          <div className='project d-flex'>
            <a href='https://weatherappimap.netlify.app' target='_blank' rel='noopener noreferrer' title='Ver online' className='siteonline'>
              <img src={weather} alt='weather' />
            </a>
            <div className='project-details'>
              <h5>Weather App</h5>
              <div className='division' />
              <p>Veja o clima em diversas cidades do mundo. Digite o nome da cidade que deseja se informar sobre o clima na
                        barra de pesquisa e veja informações de temperatura, mínima, máxima e umidade.
              </p>
              <a
                href='https://github.com/Sutolix/weather_app'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='btn-default'>Acessar repositório</button>
              </a>
            </div>
          </div>

          <div className='project d-flex'>
            <a href='https://sutolix.github.io/calculator/' target='_blank' rel='noopener noreferrer' title='Ver online' className='siteonline'>
              <img src={calcultor} alt='calculator' />
            </a>
            <div className='project-details'>
              <h5>Calculator</h5>
              <div className='division' />
              <p>Uma calculadora feita em JavaScript durante um curso da HCODE. Dê dois clicks na tecla AC para ativar o som das teclas, outros dois clicks desativa.</p>
              <a
                href='https://github.com/Sutolix/calculator'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='btn-default'>Acessar repositório</button>
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
