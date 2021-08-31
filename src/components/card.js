import React from 'react'
import faker from 'faker'


const Card  = (props) =>{
        return (
            <div className="card m-3 shadow" style={{ maxWidth: '440px'}}>
            <div className="row g-0  mycard">
              <div className="col-12">
                <img src={faker.image.people()} className="img-fluid rounded-start" alt="..."></img>
              </div>
              <div className="col">
                <div className="card-body">
                   {props.children}
                </div>
              </div>
            </div>
          </div>
        )
    }


export default Card;