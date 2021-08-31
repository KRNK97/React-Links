import React from 'react'




const Meta = ({title,desc,time})=>{
    return(
        <>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <p className="card-text"><small className="text-muted">Last updated {time} mins ago</small></p>
        </>
    )
}

export default Meta;