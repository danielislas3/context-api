
import React , {createContext,Component} from 'react'; 

export const MyContext = createContext()


export default class ContextProvided extends Component {
  state = {
    products:[
    {
      name:'github stikers',
      price:2
    },
    {
      name:'pollo chillon (despierta armando)',
      price:40
    },
    {
      name:'github mug',
      price:10
    }
  ],
    cart:[]
  }
  addProducts=product=>{
    this.setState(prev=>({products:[...prev.products,product]}))
  }
  addToCart=product=>{
    this.setState(prev=>({cart:[...prev.cart,product]}))

  }
  render() {
    const {addProducts,addToCart} = this
    return (
      <MyContext.Provider value={{state: this.state, addProducts, addToCart}}>{this.props.children}</MyContext.Provider>
    )
  }
}

