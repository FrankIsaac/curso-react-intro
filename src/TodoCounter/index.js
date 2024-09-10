import React from 'react'; 
import { TodoContext } 
from '../TodoContext'; 
import './TodoCounter.css'; 


function TodoCounter() { 
    
    const { 
        completedTodos, 
        totalTodos, 
    } = React.useContext(TodoContext); 
    
    if (completedTodos === totalTodos) {
        return   ( <h1> Felicitaciones 🥳!!! Completaste todo🎉 </h1>)
    }

    return (
    <h1 className="TodoCounter">Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs</h1>
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