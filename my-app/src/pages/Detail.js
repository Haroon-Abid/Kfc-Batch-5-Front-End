import React from 'react'
import Card1 from '../assets/Card 1.png'
import { useParams } from 'react-router';
import {products } from '../Dataset/Dataset';
const Detail = () => {
    const { Prod } = useParams();
    const product = products.find(item => item.slug === Prod) 
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                 <img src={Card1} alt="" />
                </div>
                <div className="col-md-6">
                 <h3>{product.title}</h3>
                 <p>{product.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Detail
