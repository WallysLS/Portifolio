import React from 'react';
import './Footer.css';
import { Button } from "../Button"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Gostou do meu portifólio? Entre em contato comigo!!
        </p>
        <p className='footer-subscription-text'>
          Eu também tenho uma newsletter com conteúdo de programação, se inscreva!
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Seu email'
            />
            <Button buttonStyle='btn--outline'>Me inscrever</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
      
       
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              WallysLS
            </Link>
          </div>
          <small class='website-rights'>© 2020</small>
          <div class='social-icons'>
          
            <Link
              class='social-icon-link Linkedin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>

            <Link
              class='social-icon-link Github'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-github' />
            </Link>



          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
