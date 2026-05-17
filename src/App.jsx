import './App.css'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
function App() {

  return (
    <>
    <title>Ecommerce Website</title>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage/>} />
    </Routes>
    </>
  )
}

export default App
