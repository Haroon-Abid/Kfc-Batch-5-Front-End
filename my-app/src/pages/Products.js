import React from 'react'
import {useParams} from "react-router-dom";
import {products } from '../Dataset/Dataset';
import Cards from '../Components/Cards';

const Products = () => {
    const { Category } = useParams();
    const prods = products.filter(product => product.category === Category)
    return (
        <div>
            <h1 style={{textAlign: 'Center', textTransform:'Uppercase', marginTop:'30px'}}>{Category.replace("-", " ")}</h1>
             <div className="row">
             {
              
              prods.map(p=><Cards data={p}/>)
          }
                </div>
        </div>
    )
}

export default Products
