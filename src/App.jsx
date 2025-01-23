import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import FoodList from './features/food/FoodList'
import Cart from './features/cart/Cart'

function App() {

  return (
    <>
     <div className="global">

     <Header />
          <div className="col-md-12 d-flex">
            <FoodList />
            <Cart />
          </div>
     </div>
    </>
  )
}

export default App
