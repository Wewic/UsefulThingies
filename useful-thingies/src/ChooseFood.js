import React from 'react'
import './ChooseFood.css';
import Button from './Button';

import image from './assets/bubu-think.gif';
import { useState } from 'react';

const allFood = ['Taiwanese', 'Indian', 'Mediterranean', 'Pizza', 'Vietnamese', 'HK Cafe', 'Thai', 'Burgers', 'Poke', 'Greek', 'Fast Food', 'Italian', 'Korean', 'Mexican'];
const NO_MORE_CHOICES = "No more choices!";

function ChooseFood() {
    const [food1, setFood1] = useState('Sushi');
    const [food2, setFood2] = useState('Ramen');
    
    function getNewFood1() {
      if (allFood.length < 1) {
        if (food2 === NO_MORE_CHOICES) {
          return;
        }
        setFood1(NO_MORE_CHOICES);
        return;
      }
        const foods_index = Math.floor(Math.random() * allFood.length);
        const food_to_display = allFood.splice(foods_index, 1);
        console.log("Food1: " + food_to_display);
        console.log("Remaining foods1: " + allFood);
        setFood1(food_to_display);
    }

    function getNewFood2() {
      if (allFood.length < 1) {
        if (food1 === NO_MORE_CHOICES) {
          return;
        }
        setFood2(NO_MORE_CHOICES);
        return;
      }
      const foods_index = Math.floor(Math.random() * allFood.length);
      const food_to_display = allFood.splice(foods_index, 1);
      console.log("Food2: " + food_to_display);
      console.log("Remaining foods2: " + allFood);
      setFood2(food_to_display);
  }

  return (
    <header className="ChooseFood-header">
      <img src={image} className="Food-logo" />

    <p className="ChooseFood-paragraph">
      Which one do you want more?
    </p>
    <div className='container'>
        <Button role="button" onClick={() => getNewFood2()}>{food1}</Button>
        <span className='or'>OR</span>
        <Button role="button" onClick={() => getNewFood1()}>{food2}</Button>
    </div>
  </header>
  )
}

export default ChooseFood