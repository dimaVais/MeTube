import React, { useState } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';


export function SearchName({ onSearch }) {

    const [search, setSeach] = useState('')

    const handleInput = ({ target }) => {
         setSeach(target.value);
    }

    return (
        <div className='search-box flex justify-center align-center'>
            <div className="header-container"><h2>Search Your Music</h2></div>

            <form className='flex justify-center align-center'
                onSubmit={(event) => { event.preventDefault(); onSearch(search) }}>
                < label >
                    <TextField label="Search here" type="text" name="search"
                        variant="filled" defaultValue={search} onChange={handleInput} />
                </label >
                <button>Search</button>
            </form>
        </div>
    )
}
