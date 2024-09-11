import React, { useEffect, useState } from 'react';
import { TodoContext } from '../TodoContext';
import confetti from 'canvas-confetti';
import './TodoCounter.css';

function TodoCounter() {
    const { completedTodos, totalTodos } = React.useContext(TodoContext);
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        if (completedTodos === totalTodos && totalTodos > 0) {
            setShowConfetti(true);
            
            // Iniciar el confeti
            const confettiInterval = setInterval(() => {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }, 250); // Lanza confeti cada 250ms
            
            // Detener el confeti después de 2 segundos
            const timer = setTimeout(() => {
                setShowConfetti(false);
                clearInterval(confettiInterval);
            }, 2000);

            // Limpiar los temporizadores si el componente se desmonta
            return () => {
                clearInterval(confettiInterval);
                clearTimeout(timer);
            };
        }
    }, [completedTodos, totalTodos]);

    if (showConfetti) {
        return <h1>Felicitaciones 🥳!!! Completaste todo 🎉</h1>;
    }

    return (
        <h1 className="TodoCounter">
            Completaste <span className='negrita'>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
        </h1>
    );
}

export { TodoCounter };
  
//   let message;

//   if (totalTodos === completedTodos) {
//     confetti()
//     message = 'Felicitaciones 🥳!!! Completaste todo🎉'
//   } else {
//     message = (
//       <>
//         Has completado <span className='negrita'>{completedTodos}</span>  de <span className='negrita'>{totalTodos}</span> TODOS;
//       </>
//     );
//   }