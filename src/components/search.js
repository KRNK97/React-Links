import React from 'react'
import ReactDOM from 'react-dom'


const Search = ()=>{
    return(
        <div className="m-0 p-4 text-success">
            <input type="text" placeholder="search for something" className="form-control"/>
            <button className="btn btn-outline-info my-2 btn-block">search</button>
        </div>
    )
}


export default Search;