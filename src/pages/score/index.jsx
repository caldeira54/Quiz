import React from 'react';
import { useNavigate } from 'react-router-dom';

import logoQuiz from '../../assets/images/quiz.png'

import './styles.css';

function Score( {score} ) {
  const navigate = useNavigate();

  function restart() {
    return navigate('/');
  }

  const mensages = {
    0: 'Você não sabe nada sobre react',
    1: 'Você sabe muito pouco sobre react',
    2: 'Você um pouco sobre react',
    3: 'Você está no caminho',
    4: 'Você está aprendendo bem react',
    5: 'Você sabe muito sobre react'
  }

  return (
    <div className='container'>
        <h1 className='title'>Pontuação</h1>
        <img src={logoQuiz} alt='Logo Quiz' className='logo'/>
        <small className='description'>{score ? mensages[score] : messages[5]}</small>

        <div className='score-container'>
          <big className='score'>{score ? score : 5}</big>
          <small className='total'>/5</small>
        </div>

        <button onClick={restart} className='button-restart'>🚀 Reiniciar</button>

        <footer className='footer'>
            <span className='author'>Criado por <a href="https://github.com/caldeira54/" target="_blank" rel='noreferrer' className='author'>Arthur 😎</a></span>
        </footer>
    </div>
  );
}

export default Score;