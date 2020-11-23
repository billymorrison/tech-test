import { useState } from 'react';
import '../styles/Search.css';
import getImages from '../requests/getImages.js'

const Search = () => {
    const [value, setValue] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        getImages(value)
    }

    return (
        <>
            <form>
                <input type='text' data-testid='text-input' onInput={(e) => setValue(e.target.value)}/>
                <button className='search-button' type='submit' onClick={(e) => handleSubmit(e)}>Search</button>
            </form>
        </>
    )
}

export default Search
