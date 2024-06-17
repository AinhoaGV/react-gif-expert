import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = ({ target }) => {//event
        setInputValue( target.value );//event.target.value
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return; // Así si está vacío sale de la función
        //setCategories( categories => [inputValue, ...categories] );
        onNewCategory( inputValue.trim() )
        setInputValue('');//Con esto hacemos que el campo se vacie
    }
    return(
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs..."
                value={ inputValue }
                onChange={ onInputChange } //(event) => onInputChange(event)
            />
        </form>
    )
}