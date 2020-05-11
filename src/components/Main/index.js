import React from 'react'
// import { Link } from 'react-router-dom'

import './main.css'

import MenuWeb from '../MenuWeb'
import MenuMobile from '../MenuMobile'

export default function Main () {

  return (
    <div className="container">
      <MenuWeb />
      <MenuMobile />
    </div>
  )
}
