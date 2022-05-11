import { useState } from 'react'

export const useForm = (initialState = {}) => {
    //Recibe un objeto para manipularlo
    const [values, setValues] = useState(initialState);
  
    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [target.name] : target.value
        });
    }

    return [values, handleInputChange, reset]
}
