import React, { useState } from 'react'
import Checkintegrate from './Checkintegrate'


const Check = () => {
    const [value, setvalue] = useState('Apple')

    // const justClick = (value) => {
    //   setvalue(value)
    // }

  return (

   

    <>
        <p>{value}</p>
        <button onClick={() => setvalue("mango")}>Click</button>
        <button onClick={() => setvalue("gawawa")}>Click</button>
        <button onClick={() => setvalue("sweetmangoo")}>Click</button>
        <Checkintegrate note= {value}/>
        </>
  )
}

export default Check