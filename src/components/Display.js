import React from 'react'

const Display = (props) => {
  console.log(props);
  const { parentData, parenrData1, parentData2, nameFxn } = props;
  return (
<main>
  <h1 onClick={()=> nameFxn('Ichhit Sapkota')}>Display Garne</h1>
  <p>{parentData}</p>
    <p>{props.parenrData1}</p>  
    <p>{props.parentData2}</p>  
</main>
  )
}

export default Display