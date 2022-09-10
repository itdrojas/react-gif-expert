import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState(' ')

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return
    // setCategories(categories => [inputValue, ...categories])
    setInputValue(` `)
    onNewCategory(inputValue.charAt(1).toUpperCase() + inputValue.slice(2).toLocaleLowerCase().trim())
  }

  return (
    <form onSubmit={onSubmit} >
      <input
        type='text'
        placeholder='Buscar Gifs'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
