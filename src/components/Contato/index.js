import React from 'react'
import './contato.css'

import { FaWhatsappSquare, FaTelegram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import Background from '../Background'

export default function Contato () {
  return (
    <div className='page'>
      <Background />

      <div className='content'>
        <div className='contact'>

          <div className='title'>
            <span>CONTATO</span>
          </div>
          <div className='layer'>
            <span>CONTATO</span>
          </div>

          <div className='contact-means'>
            <div className='type d-flex align-center'>
              <div className='contact-icon d-flex justify-center align-center'>
                <MdEmail size={30} color='#fff' />
              </div>
              <div className=''>
                <h5>Email</h5>
                <span>tg884ght@gmail.com</span>
              </div>
            </div>

            <div className='type d-flex align-center'>
              <div className='contact-icon d-flex justify-center align-center'>
                <FaWhatsappSquare size={30} color='#fff' />
              </div>
              <div className=''>
                <h5>WhatsApp</h5>
                <span>+55 31 99875-9023</span>
              </div>
            </div>

            <div className='type d-flex align-center'>
              <div className='contact-icon d-flex justify-center align-center'>
                <FaTelegram size={30} color='#fff' />
              </div>
              <div className=''>
                <h5>Telegram</h5>
                <span>@Sutolix</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
