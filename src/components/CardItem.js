import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item' >
              
        <Link className='cards__item__link' 
       
        style={{width:500}} >
  
          <video src='/videos/compre.mp4' autoPlay loop muted className='cards__item__pic-wrap' data-category={props.label}
          href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"
        
          />

         
          <div className='cards__item__info'>
            <h5 className='cards__item__text' style={{textAlign: 'center', fontSize: 25}} >{props.text} </h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
