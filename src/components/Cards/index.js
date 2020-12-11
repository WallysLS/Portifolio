import React from 'react';
import './Cards.css';
import CardItem from '../CardItem';
import CardItem2 from "../CardItem2"
import CardItem3 from "../CardItem3"
import CardItem4 from "../CardItem4"

function Cards() {
  return (
    <div className='cards'>
      <h1>Hi There. Nice to meet you!</h1>
      <p>It's been a little more than a year since I decided to start my path as a developer.
        After learning a bit about different languages, I chose to focus on Javascript.
        I have full stack knowledge, but right now I'm focusing more on frontend development.
        I can work with:
        <br></br>
        <i class="fab fa-js fa-4x"></i>
        <i class="fab fa-css3-alt fa-4x"></i>
        <i class="fab fa-html5 fa-4x"></i>
        <i class="fab fa-php fa-4x"></i>
        <i class="fab fa-react fa-4x"></i>
         </p>

         <h1>This is my recent work</h1>
         <br></br>
         <br></br>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <CardItem
              src='images/img-2.jpg'
              text='Compre da Favela'
              path='/about'
            />
            <CardItem2
              src='images/img-1.jpg'
              text='Mina'
              path='/about'
              
            />
            </ul>
            
            <ul className='cards__items2'>

            <CardItem3
              src='images/img-2.jpg'
              text='Amadrinha'
              path='/about'
            />

             <CardItem4
              src='images/img-2.jpg'
              text='myRGBgame'
              path='/about'
            />
            </ul>
           
         
         
        </div>
      </div>
    </div>
  );
}

export default Cards;
