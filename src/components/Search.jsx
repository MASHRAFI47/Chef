import React, { useEffect, useState } from 'react'
import style from './search.module.css'

const Search = (props) => {
    const [searchText, setSearchText] = useState("");

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }

    useEffect(() => {
        props.onSearch(searchText)
    }, [searchText]);

    return (
        <div style={{ textAlign: "center" }}>
            <input type="text" placeholder='Search Meal' value={searchText} onChange={handleSearch} style={{borderRadius:"11px", border:"none", marginBottom:"40px", padding:"0px 15px"}} className={style.placeholder}/>
        </div>
    )
}

export default Search