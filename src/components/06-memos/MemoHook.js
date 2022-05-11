import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCouter } from '../../hooks/useCouter'
import '../02-useEffect/effects.css'


export const MemoHook = () => {
   const {counter, increment} = useCouter(5000);
   const [show, setShow] = useState(true);
   
   const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])
    
  return (
    <div>
        <h3> Counter: <small>{counter}</small> </h3>
        <h1>MemoHook</h1>
        <hr />

        <p>{memoProcesoPesado}</p>

        <button 
        className='btn btn-info'
        onClick={increment}>
            +1
        </button>

        <button
        className='btn btn-outline-info ml-3'
        onClick={() => {
            setShow(!show);
        }}>
            Show/Hide {JSON.stringify(show)}
        </button>
    </div>
  )
}
