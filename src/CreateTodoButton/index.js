import './CreateTodoButton.css'

function CreateTodoBuutton({ setOpenModal }) {
    return (
      <button 
        className='CreateTodoButton'
        onClick={
          () => {
            setOpenModal(state => !state);
          }
          // ( event ) => {
          //   console.log('le diste click')
          //   console.log(event);
          //   console.log(event.target);
            
          // }
        }
      > + </button>     
    );
  }

  export { CreateTodoBuutton }