import React from 'react'
import { Link } from 'react-router-dom'

import './menu.css'
import avatar from "../../assets/img/avatar.webp"

import { TiSocialGithubCircular, TiSocialLinkedinCircular } from 'react-icons/ti';

export default function Menu () {
  return (
  	<div className="menu">
      <div className="avatar">
        <img src={avatar} />
      </div>
      <div className="line"></div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Resumo</li>
          <li>Portfólio</li>
          <li>Contao</li>
        </ul>
      </nav>
      <div className="line"></div>
      <div className="me">
        <span>©2020 Hookod</span>
      </div>
    </div>
  )
}