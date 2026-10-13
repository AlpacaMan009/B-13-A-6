import { Suspense, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './navbar/Navbar'
import Banner from './banner/Banner'
import Products from './cart/Products'

const getProducts = async() => {
  const res = await fetch("/model.json")
  return res.json()
}


const productsPromise = getProducts()


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar></Navbar>
      <Banner></Banner>

      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Products productsPromise = {productsPromise}></Products>
      </Suspense>
    </>
  )
}

export default App
