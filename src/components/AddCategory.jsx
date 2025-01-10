import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ( event )=>{
        setInputValue(event.target.value)
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        // console.log(inputValue);
        if( inputValue.trim().length <= 1) return;
        // setCategories(categories=> [inputValue, ...categories]);
        onNewCategory( inputValue.trim() );
        setInputValue('');

    }


    return (
        <form className="form-input" onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="buscar fits"
                value = { inputValue }
                onChange={ onInputChange }
            />
            <button className="modern-button" onClick={onsubmit}>Agregar</button>
        </form>
        
    )
}
