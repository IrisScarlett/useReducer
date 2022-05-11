import React from 'react'
import { useCouter } from '../../hooks/useCouter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

  const {counter, increment} =  useCouter(1);

 const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

 const {author, quote} = !!data && data[0];
//  console.log(author, quote);

 return (
    <div>
        <h1>BrakingBad Quotes</h1>
        <br />
    {loading ?
                (<div className='alert alert-info text-center'>
                    <p>Loading...</p>
                </div>)
            : 
                (<blockquote className='blockquote text-right'>
                    <p className='mb-8'>{quote}</p>
                    <footer className='blockquote-footer'>{author}</footer>

                </blockquote>)
}
        <button className='btn btn-info'
        onClick={increment}>
            Siguiente quote
        </button>

        
        </div>
  )
}
