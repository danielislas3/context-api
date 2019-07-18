import React from 'react'
import {MyContext} from '../Context'

const HomeContainer = () => {
  return (
    <div>
      <h1>Home Components: </h1>
      <MyContext.Consumer>
     {({state:{products}, addToCart})=>
      products.map((product,i)=>( 
        <div key={i}>
          <p>{product.name}</p> - <small>${product.price}</small>
          <br/>
          <button onClick={()=>addToCart(product)}>add to cart </button>
        </div>

      ))}
      </MyContext.Consumer>

    </div>
  )
}

export default HomeContainer
