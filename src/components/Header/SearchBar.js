import { useState } from "react";
import { fetchDataBySearchTerm } from "../../data/redditData";
import { useDispatch } from "react-redux";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [ term, setTerm ] = useState('');


    const handleChange = ({target}) => {
        setTerm(target.value);
    }

    const handleSearchTerm = (e) => {
        if (e.key === 'Enter') {
            setTerm(term.toLowerCase());
            // console.log('enter')
            if (term.length > 0) {
                dispatch(fetchDataBySearchTerm({term: term, sort: 'hot'}));
            }
            setTerm('');
        } 
    }

    return (
        <>
            <input 
                type='text'
                id='term'
                value={term}
                placeholder="Search Leddit"
                onChange={handleChange}
                onKeyDown={handleSearchTerm}
            />
        </>
    );
}

export default SearchBar;