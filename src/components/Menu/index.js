import React from 'react'
import { Link } from 'react-router-dom'

import './menu.css'
import avatar from "../../assets/img/avatar.webp"

const menu = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Sobre',
    path: '/'
  },
  {
    label: 'Resumo',
    path: '/'
  },
  {
    label: 'Portfólio',
    path: '/'
  },
  {
    label: 'Contato',
    path: '/'
  },
]

export default function Menu () {
  return (
  	<div className="menu">
      <div className="avatar">
        <img src={avatar} />
      </div>
      <div className="line"></div>
      <nav>
        <ul>
        {menu.map(item => (
            <li><Link to={item.path}>{item.label}</Link></li>
          ))}
        </ul>
      </nav>
      <div className="line"></div>
      <div className="me">
        <span>©2020 Hookod</span>
      </div>
    </div>
  )
}