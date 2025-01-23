// ||Without useCallback ||

// import React, { useState } from 'react'

// const ChildComponent = ({ handleClick }) => {
//     console.log("Child component rendered!");
//     return <button type='button' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={handleClick}>Click Me!</button>;
//   };

// function ParentComponent() {
//     const[count, setCount] = useState(0);

//     const increment = () => setCount(count + 1); // This function is re-created on every render


//     return (
//         <div className='flex justify-center pt-10'>
//             <h1 className='text-white pr-4 flex align-middle self-center'>Count: {count}</h1>
//             <ChildComponent handleClick={increment} />
//         </div>
//     )
// }

// export default ParentComponent




// ||With useCallback ||
import React, { useState, useCallback, useRef } from "react";

const ChildComponent = React.memo(({ handleClick }) => {
  console.log("Child");
  return <button type='button' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={handleClick}>Click Me!</button>;
});

const ParentComponent = () => {
console.log("Parent");
  const [count, setCount] = useState(0);
  const prevIncrementRef = useRef();

  const increment = useCallback(() => {
    console.log('HIII')
    if (prevIncrementRef.current !== increment) {
      console.log("Increment function recreated");
    } else {
      console.log("Increment function reused");
    }
    return setCount(count + 1)
  }
  , []); // Function is memoized

  // Check if the function reference has changed
  // if (prevIncrementRef.current !== increment) {
  //   console.log("Increment function recreated");
  // } else {
  //   console.log("Increment function reused");
  // }

  // Update the reference
  prevIncrementRef.current = increment;

  return (
    <div className='flex justify-center pt-10'>
      <h1 className='text-white pr-4 flex align-middle self-center'>Count: {count}</h1>
      <button type='button' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={() => setCount(0)}>Reset</button>;
      <ChildComponent handleClick={increment} />
    </div>
  );
};

export default ParentComponent;