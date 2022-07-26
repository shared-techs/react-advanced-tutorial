import React, {useState} from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 57,
    message: 'hello'
  });

  const changeMessage = () => {
    setPerson({
      ...person,
      message: 'bye'
    });
  };

  console.log(person);
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button type='button' className='btn' onClick={changeMessage}>Change Message</button>
    </>
  );
};

export default UseStateObject;
