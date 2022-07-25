import React from 'react';
import {data} from '../../../data';
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const addItem = () => {
    let newPeople = [...people, {id: people.length + 1, name: 'new item'}];
    setPeople(newPeople);
    console.log(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const {id, name} = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setPeople([])}>
        clear items
      </button>
      <button className='btn' onClick={addItem}>
        add items
      </button>
    </>
  );
};

export default UseStateArray;
