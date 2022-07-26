import React, {useState} from 'react';
import {data} from '../../../data';
const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (event, id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
    console.log(event);
  };

  const addItem = () => {
    const ids = people.map((person) => person.id);
    let nextId = (ids.length > 0) ? Math.max(...ids) + 1 : 1;
    let newPerson = {id: nextId, name: 'New Person'};
    setPeople([...people, newPerson]);
  };

  return (
    <>
      {people.map((person) => {
        const {id, name} = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={(event) => removeItem(event, id)}>remove</button>
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
