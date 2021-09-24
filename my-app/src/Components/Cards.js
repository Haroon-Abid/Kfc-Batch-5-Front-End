import React from 'react'
import Card1 from '../assets/Card 1.png'
const Cards = (props) => {

  // const props = {
  //   data = {
  //     title:"Three Card",
  //     description:"This is description the from card three."
  //   }
  // } understanding the props.data.title
    return (
            <div className="col-md-4">
            <div className="card">
            <img src={Card1} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{props.data.title}</h5>
            <p className="card-text">{props.data.description}</p>
            <a href="#" className="btn btn-danger">PKR {props.data.price}</a>
            <a href="#" className="btn btn-primary">Add to Bucket</a>
</div>
</div>
      </div>
    )
}

export default Cards
