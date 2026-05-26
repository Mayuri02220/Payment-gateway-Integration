import React from 'react'
import Products from './components/products.jsx'
import PaymentSuccess from './components/paymentSuccess.jsx'
import data from "./components/data.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Products data={data} />} />
        <Route path='/paymentSuccess' element={<PaymentSuccess />} />
      </Routes>
    </Router>
  )
}

export default App