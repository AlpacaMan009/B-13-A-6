import { Suspense, useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Banner from "./banner/Banner";
import Products from "./cart/Products";
import Carts from "./cart/Carts";

const getProducts = async () => {
  const res = await fetch("/model.json");
  return res.json();
};

const productsPromise = getProducts();



function App() {
  const [activeTab, setActiveTab] = useState('product');
  const [carts,setCarts] = useState([])

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40 checked:bg-linear-to-r from-[#4F39F6] to-[#9514FA] checked:text-white"
          aria-label="Products"
          onClick={() => setActiveTab('product')}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40 checked:bg-linear-to-r from-[#4F39F6] to-[#9514FA] checked:text-white"
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab('carts')}
        />
        
      </div>
      {activeTab === 'product' && <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Products productsPromise={productsPromise} carts = {carts} setCarts = {setCarts}></Products>
      </Suspense>}

      {activeTab === 'carts' && <Carts carts = {carts} setCarts = {setCarts}></Carts>}
    </>
  );
}

export default App;
