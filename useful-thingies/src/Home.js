import React from 'react'
import logo from './assets/bears.gif';
import './Home.css';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

  return (
    <header className="Home-header">
    <img src={logo} className="Home-logo" alt="logo" />
    <p className="Home-paragraph">
      Can't decide what to eat?
    </p>
    <Button role="button" onClick={() => navigate('choosefood')}>Let's decide together!</Button>
  </header>
  )
}

export default Home