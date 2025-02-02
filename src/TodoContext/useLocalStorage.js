import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);


  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
 
        setLoading(false);
      } catch(error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);

  } ); //[]); // hay cambio

    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem); 
    };

    // console.log(item);

    return {
      item,
      saveItem,
      loading,
      error,
    };
  }

  export { useLocalStorage }

//  localStorage.removeItem('TODOS_V1');



//  const defaultTodos = [
//    { text: 'Cortar zandia', completed: true },  
//    { text: 'Tomar el Curso de intro a React', completed: true },
//    { text: 'Gym', completed: true},
//    { text: 'TATATA', completed: false},
//    { text: 'Revisar ', completed: false},
//  ];

//  localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

//  localStorage.setItem('TODOS_V2', JSON.stringify(defaultTodos));