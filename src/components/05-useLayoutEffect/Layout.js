import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCouter } from '../../hooks/useCouter'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'

export const Layout = () => {

  const {counter, increment} =  useCouter(1);

 const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

 const { quote} = !!data && data[0];

 const pTag = useRef();
 const [boxSize, setBoxSize] = useState({});

 useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
 },[quote])

 return (
    <div>
        <h1>LayoutEffect</h1>
        <br />
    
        <blockquote className='blockquote text-right'>
            <p 
            ref={pTag}
            className='mb-8'
            >{quote}</p>
        </blockquote>
        <pre> {JSON.stringify(boxSize, null, 3)}</pre>

        <button className='btn btn-info'
        onClick={increment}>
            Siguiente quote
        </button>

        
        </div>
  )
}
