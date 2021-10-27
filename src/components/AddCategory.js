import React, {useState}from 'react'

import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState(''); // undefined

    const handleInputChange = (evt) => {
        setInputValue(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (inputValue.trim().length > 2) {            
            //setCategories(categ => [ ...categ, inputValue]);
            setCategories(categ => [ inputValue, ...categ]);
            setInputValue('');            
        }        
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
            <h2>Add Category</h2>
            <input 
                type="text" 
                value={inputValue}
                onChange={ handleInputChange } 
            />
            </form>
        </div>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}



