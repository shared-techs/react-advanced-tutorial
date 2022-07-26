import React, {useState} from 'react';

const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <section style={{margin: '4rem 0'}}>
        <h2>Regular Counter</h2>
        <h1>{count}</h1>
        <button className='btn' onClick={() => setCount(count + 1)}>+</button>
        <button className='btn' onClick={() => setCount(count - 1)}>-</button>
        <button className='btn' onClick={() => setCount(0)}>0</button>
      </section>
    </>
  );
};

export default UseStateCounter;
