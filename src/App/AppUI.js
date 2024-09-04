import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoBuutton } from '../CreateTodoButton';
import React from 'react';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoContext } from '../TodoContext';

function AppUI() {
    const {
        loading,
        error,
        searchTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <>
          <TodoCounter />
          <TodoSearch />

          <TodoContext.Consumer>
            {() => (
              <TodoList>
                {loading && (
                  <>
                  <TodosLoading />
                  <TodosLoading />
                  <TodosLoading />
                  </>
                )}
                {error && <TodosError/>}
                {(!loading && searchTodos.length === 0) && <EmptyTodos />}

                {searchTodos.map(todo => (
                  <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
                ))}
              </TodoList>
            )}
          </TodoContext.Consumer>

          < CreateTodoBuutton 
            setOpenModal={setOpenModal} 
          />

          {openModal && (
            < Modal>
                <TodoForm />
            </Modal>
          )}  
        </>
      );
}

export { AppUI }