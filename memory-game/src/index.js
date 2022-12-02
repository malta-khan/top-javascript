import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css'
import './styles/index.css';
import MemoryGame from './components/memoryGame';

const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
  <div>
  <div className='logo'>
  <h1 className='logoTitle'>Memory Game</h1>
  <p className='logoDescription'>fruits and veggies</p>
  </div>
  
  <div className='rules'>
    <p>How to play?</p>
    <p>- Pick fruits and veggies to get score.</p>
    <p>- Do not pick anything twice.</p>
  </div>

<MemoryGame></MemoryGame>

  <div className='creditsContainer'> 
  <div className='credits'>Coded by <a target="_blank" href='https://malta-khan.github.io/'>Malta</a></div>
  <div className='credits'>Project idea from <a target="_blank" href='https://www.theodinproject.com/lessons/node-path-javascript-memory-card'>The Odin Project</a></div>
  <div className='credits'>Fruit images from <a target="_blank" href='https://onlymyenglish.com/fruits-and-vegetables-names/'>onlymyenglish.com</a></div>
  </div>

  </div>
  );
