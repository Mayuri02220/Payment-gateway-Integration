import React from 'react'
import Products from '../src/components/products.jsx';
import data from "./components/data.jsx";

const App = () => {
  return (
    <div>
      <Products data={data}/>
    
    </div>
  )
}

export default App

