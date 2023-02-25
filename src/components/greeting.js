import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);

  return (
    <div>
      <h1>Hello World in many Languages:</h1>
      <h2>
        {greeting.message.message}
      </h2>
    </div>
  );
};
export default Greeting;
