import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
 


function App() { 
  
  return (
    <TodoProvider>
       <AppUI/>
    </TodoProvider>
  );      
}

export default App;

 /*  const todosCompletados = todos.filter(todo => !!todo.completed).length;
  const totalTodos2 = todos.length; */

  //en esta linea de abajo estaba intentando hacer el reto pero estoy un poco estancado
  //const todosLosTodosCompletados = 'Bien hecho todo completo'