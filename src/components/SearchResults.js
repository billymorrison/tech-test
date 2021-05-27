import React from 'react'
import '../styles/SearchResults.css'

const SearchResults = (props) => {
    const { images } = props

    if(!images.length) {
        return (<p>No Results</p>)
    } else {
        return(
            <>
                {
                    images.map(element => <img src={element} />)
                }
            </>
        )
    }
}

export default SearchResults