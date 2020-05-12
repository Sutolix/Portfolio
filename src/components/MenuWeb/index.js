import React, { useState } from 'react'

import avatar from '../../assets/img/avatar.webp'
import './menuweb.css'

import ScrollToTop from '../../ScrollToTop.js'
import Contato from '../Contato'
import Home from '../Home'
import Projetos from '../Projetos'
import Resumo from '../Resumo'
import Sobre from '../Sobre'

const menu = [
  {
    label: 'Home'
  },
  {
    label: 'Sobre'
  },
  {
    label: 'Resumo'
  },
  {
    label: 'Projetos'
  },
  {
    label: 'Contato'
  }
]

export default function MenuWeb () {
  const [select, setSelect] = useState('Home')

  return (
    <>
      <ScrollToTop select={select} />
      <div className='menu'>
        <div className='avatar'>
          <img src={avatar} alt='Profile' title='A Web Developer' />
        </div>
        <div className='line' />
        <nav>
          {menu.map(item => (
            <div className='option' key={item.label}>
              <input
                type='radio'
                name='menu-options'
                id={item.label}
                value={item.label}
                onChange={e => setSelect(e.target.value)}
                defaultChecked={(item.label === 'Home')}
              />
              <label htmlFor={item.label}>{item.label}</label>
            </div>
          ))}
        </nav>
        <div className='line' />
        <div className='me'>
          <span>©2020 Hookod</span>
        </div>
      </div>

      <div className='web'>

        {
          (select === 'Contato') ? (<Contato />)
            : (select === 'Resumo') ? (<Resumo />)
              : (select === 'Projetos') ? (<Projetos />)
                : (select === 'Sobre') ? (<Sobre />)
                  : (<Home />)
        }

      </div>
    </>
  )
}
