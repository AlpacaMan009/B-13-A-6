import React, {use} from 'react';
import ProductCart from './ProductCart';

const Products = ({productsPromise, carts, setCarts}) => {

    const products = use(productsPromise)
    console.log(products)
    return (
        <div className='py-20 max-w-7xl mx-auto'>

            <div className='text-center'>
                <h2 className='font-bold text-7xl'>Premium Digital Tools</h2>

                <p className='mt-2 font-light'>Choose from our curated collection of premium digital products designed 
                    <br />
                    to boost your productivity and creativity.</p>

            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 auto-rows-fr'>
                {products.map((product) => (
                    <ProductCart key={product.id} product = {product} carts = {carts} setCarts={setCarts}></ProductCart>
                ))}
            </div>
            
        </div>
    );
};

export default Products;