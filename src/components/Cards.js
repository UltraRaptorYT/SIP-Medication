import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Fill in those tubes!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Take this high blood sugar medicine before breakfast each day'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Take this high blood sugar medicine after lunch each day'
              label='Luxury'
              path='/services'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Take this high cholesterol medicine before bed each day'
              label='Mystery'
              path='/services'
            />
          </ul>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
            
          </ul> */}
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
