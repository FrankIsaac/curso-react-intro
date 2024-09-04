import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
// import { useEffect, useState } from 'react';

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);   


  const [showConfetti, setShowConfetti] = useState(false);
  const [message, setMessage] = useState('Has completado 0 de 0 TODOS');

  useEffect(() => {
      if (completedTodos === totalTodos && !showConfetti) {
          setShowConfetti(true);

          const intervalId = setInterval(() => {
              confetti();
          }, 200);

          // Detener la animación después de 2 segundos
          setTimeout(() => {
              clearInterval(intervalId);
              setShowConfetti(false);
          }, 2000);
      }
  }, [completedTodos, totalTodos, showConfetti]);

  if (completedTodos === totalTodos) {
      setMessage('¡Felicitaciones! Completaste todo');
  } else {
      setMessage(`Has completado ${completedTodos} de ${totalTodos} TODOS`);
  }

  return (
      <h1>
          {message}
      </h1>
  );
}

export { TodoCounter };
  
  // let message;

  // if (totalTodos === completedTodos) {
  //   confetti()
  //   message = 'Felicitaciones 🥳!!! Completaste todo🎉'
  // } else {
  //   message = (
  //     <>
  //       Has completado <span className='negrita'>{completedTodos}</span>  de <span className='negrita'>{totalTodos}</span> TODOS;
  //     </>
  //   );
  // }