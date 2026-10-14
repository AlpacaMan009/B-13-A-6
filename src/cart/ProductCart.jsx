import React, { useState } from 'react';
import { toast } from 'react-toastify';


const ProductCart = ({product, carts, setCarts}) => {

    const [isAdded, setIsAdded] = useState(false)

    const handleAdded = () => {
        setIsAdded(true)

        const isFound = carts.find(item => item.id === product.id)
        
        if(isFound){
            toast.error('Item already in the cart')
            return
        }


        setCarts([...carts,product])
        toast.success('Item added to cart!')
    
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-sm flex flex-col h-full">
  <div className="card-body">

    <div className='flex justify-between'>
        <img src={product.icon} alt="" />
        <span className="badge badge-md rounded-full" 
            style={{
    backgroundColor:
      product.badge.text === "Best Seller" ? "#FEF3C6" :
      product.badge.text === "Popular"     ? "#E1E7FF" :
      product.badge.text === "New"         ? "#DBFCE7" :
      "#cccccc20",
    color:
      product.badge.text === "Best Seller" ? "#BB4D00" :
      product.badge.text === "Popular"     ? "#8b5cf6" :
      product.badge.text === "New"         ? "#0A883E" :
      "#666666",
  }}
        >{product.badge.text}</span>
    </div>

    <div className='space-y-4'>
      <h2 className="text-3xl font-bold">{product.title}</h2>
      <p>{product.description}</p>
      <span className="text-xl">${product.price}
        <span className='text-sm font-light'>{product.billing_period}</span></span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      
      {
        product.features.map((feature) => (
            <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{feature}</span>
      </li>
        ))
      }
    
    </ul>
    <div className="mt-6 mt-auto">

      <button onClick={handleAdded} className={`btn btn-block ${
    isAdded ? "btn-success text-bg-gradient-to-r from-purple-700 to-purple-500" : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white border-0"
  }`}

      >{isAdded ? "Added" : "Buy Now"}</button>
    </div>
  </div>
</div>  
        </div>
    );
};

export default ProductCart;