import React from 'react'
import Cards from '../Components/Cards'
import {products} from '../Dataset/Dataset'
const Home = () => {
    return (
            <div className="row mt-5">
      {/* <Cards title="First Card" description="This is description the from card one." />
      <Cards title="Second Card" description="This is description the from card twoo." />
      <Cards title="Third Card" description="This is description the from card three." /> */}
      {
      products.map((product) => <Cards data={product}/>)
}
    </div>
    )
}

export default Home
