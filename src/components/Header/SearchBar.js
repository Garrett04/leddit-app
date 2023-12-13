import { useState } from "react";

const SearchBar = () => {
    const [ term, setTerm ] = useState('');

    const handleChange = ({target}) => {
        setTerm(target.value);
    }

    return (
        <>
            <input 
                type='text'
                id='term'
                value={term}
                placeholder="Search Leddit"
                onChange={handleChange}
            />
        </>
    );
}

export default SearchBar;