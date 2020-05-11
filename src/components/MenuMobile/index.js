import React, {useState} from 'react'

import './menumobile.css'

import ScrollToTop from '../../ScrollToTop.js'
import Contato from '../Contato'
import Home from '../Home'
import Projetos from '../Projetos'
import Resumo from '../Resumo'
import Sobre from '../Sobre'

import { AiFillHome } from 'react-icons/ai'
import { BsPersonSquare, BsPencilSquare, BsClipboardData, BsTablet } from 'react-icons/bs'

export default function MenuMobile () {

  const [mobselect, setMobselect] = useState("Home");

  return(
    <>
        <ScrollToTop select={mobselect} />
      <div className="menumobile">

    <div className="mobile">

    {
      (mobselect === "Contato") ? (<Contato />) :
      (mobselect === "Resumo") ? (<Resumo />) :
      (mobselect === "Projetos") ? (<Projetos />) :
      (mobselect === "Sobre") ? (<Sobre />) :
      (<Home />)
    }

    </div>

        <nav className="d-flex justify-around">
            <div className="mob-option">
              <input
                type="radio"
                name="mob-options"
                id="m-Home"
                value="Home"
                onClick={ e => setMobselect(e.target.value) }
                defaultChecked
              />
              <label htmlFor="m-Home"><AiFillHome /></label>
            </div>

            <div className="mob-option">
              <input
                type="radio"
                name="mob-options"
                id="m-Sobre"
                value="Sobre"
                onClick={ e => setMobselect(e.target.value) }
              />
              <label htmlFor="m-Sobre"><BsPersonSquare /></label>
            </div>

            <div className="mob-option">
              <input
                type="radio"
                name="mob-options"
                id="m-Resumo"
                value="Resumo"
                onClick={ e => setMobselect(e.target.value) }
              />
              <label htmlFor="m-Resumo"><BsPencilSquare /></label>
            </div>

            <div className="mob-option">
              <input
                type="radio"
                name="mob-options"
                id="m-Projetos"
                value="Projetos"
                onClick={ e => setMobselect(e.target.value) }
              />
              <label htmlFor="m-Projetos"><BsClipboardData /></label>
            </div>

            <div className="mob-option">
              <input
                type="radio"
                name="mob-options"
                id="m-Contato"
                value="Contato"
                onClick={ e => setMobselect(e.target.value) }
              />
              <label htmlFor="m-Contato"><BsTablet /></label>
            </div>
        </nav>


    </div>
    </>
  )
}
