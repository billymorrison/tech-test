import { useState } from 'react';
import '../styles/Search.css';
import getImages from '../requests/getImages.js'

const Search = (props) => {
    const [value, setValue] = useState('')
    const { setSearchResults } = props

    const handleSubmit = async (event) => {
        event.preventDefault()
        setSearchResults( await getImages(value) )
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
