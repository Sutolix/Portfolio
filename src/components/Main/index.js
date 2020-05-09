import React, {useState, useEffect} from 'react'
// import { Link } from 'react-router-dom'

import './main.css'
import avatar from "../../assets/img/avatar.webp"

import Contato from '../Contato'
import Home from '../Home'
import Projetos from '../Projetos'
import Resumo from '../Resumo'
import Sobre from '../Sobre'

const menu = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Sobre',
    path: '/about'
  },
  {
    label: 'Resumo',
    path: '/resume'
  },
  {
    label: 'Projetos',
    path: '/portfolio'
  },
  {
    label: 'Contato',
    path: '/contact'
  },
]

export default function Main () {

  const [select, setSelect] = useState("Home");

  useEffect(() => {
    console.log(select)
  }, [select]);


  return (
    <div className="container">
      <div className="menu">
        <div className="avatar">
          <img src={avatar} alt="Profile"/>
        </div>
        <div className="line"></div>
        <nav>
          {menu.map(item => (
            <div className="option" key={item.label}>
              <input
                type="radio"
                name="menu-options"
                id={item.label}
                value={item.label}
                onChange={ e => setSelect(e.target.value) }
                defaultChecked = {(item.label === "Home") ? true : false}
              />
              <label htmlFor={item.label}>{item.label}</label>
            </div>
          ))}
        </nav>
      <div className="line"></div>
      <div className="me">
        <span>©2020 Hookod</span>
      </div>
    </div>

    {
      (select === "Contato") ? (<Contato />) :
      (select === "Resumo") ? (<Resumo />) :
      (select === "Projetos") ? (<Projetos />) :
      (select === "Sobre") ? (<Sobre />) :
      (<Home />)
    }

    </div>
  )
}