import React, { useState, useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext.jsx';
import Title from './Title.jsx';
import ProductItem from './ProductItem.jsx';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSellers, setBestSellers] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((product) => (product.bestseller));
        setBestSellers(bestProduct.slice(0,5));
    }, [products]);

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Explore our Best Sellers - a curated collection of top-rated styles loved by our customers. From timeless classics to trendy must-haves, find your next favorite piece here.
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSellers.map((product, index) =>(
                    <ProductItem key={index} id={product._id} image={product.image} name={product.name} price={product.price}/>
                )
                    
                )
            }
        </div>
    </div>
  )
}

export default BestSeller