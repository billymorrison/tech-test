import { useState } from 'react';
import '../styles/Search.css';

const Search = () => {
    const [value, setValue] = useState('')

    return (
        <>
            <form>
                <input type='text' data-testid='text-input' onInput={(e) => setValue(e.target.value)}/>
                <button className='search-button' type='submit'>Search</button>
            </form>
        </>
    )
}

export default Search