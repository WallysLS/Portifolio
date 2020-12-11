import React from 'react';
import './Footer.css';
import { Button } from "../Button"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
     
      <section class='social-media'>
        <div class='social-media-wrap'>
         
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
