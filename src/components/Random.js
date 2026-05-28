import React from 'react'
import { useState } from 'react';

const Random = () => {
const [value, setValue] = useState("no");



const handleClick = (payoo) => {
  setValue(payoo);
}
console.log('Thichyo!', value);

  return (
 <main>
    <button onClick={() => handleClick('yes')}>
      Click me!
    </button>
  
    { value === "yes" &&
      <input type="text"/>
      }

    {value === "no" &&
    <button> No huda dekhine</button>
    }
 </main>
  )
}

export default Random