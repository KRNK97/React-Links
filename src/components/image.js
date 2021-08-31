import React from 'react'
import ReactDOM from 'react-dom'


const Image = ()=>{
    return(
        <div style={{ position:"fixed", left:"0", top:"0", zIndex:"-1", minHeight:"100vh"}}>
            <img src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" style={{ width:"100%"}} className=""/>
        </div>
    )
}

export default Image;