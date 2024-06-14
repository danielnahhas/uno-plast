'use client'
import React from 'react'
import { bestSellers } from '../constants'
import Product from './BestSellersProduct';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

const BestSellers = () => {
  return (
    <section className='px-4 lg:px-20 py-10 md:py-20 space-y-4 md:space-y-8'>
        <Fade triggerOnce>
          <div className='flex justify-between items-center'>
              <h2 className='text-3xl md:text-5xl font-extrabold'>Best Sellers</h2>
              <Link href={'/products'} className='border text-primaryBlue border-primaryBlue hover:bg-primaryBlue hover:text-white transition-colors px-6 py-1.5 md:py-3 md:px-8 rounded-lg'>View All</Link>
          </div>
        </Fade>
        <div className='_bestsellers-grid grid gap-4'>
          <Fade triggerOnce cascade damping={0.3}>
            {bestSellers.slice(0,3).map(product => <Product key={product.id} product={product}/>)}
          </Fade>
        </div>
    </section>
  )
}

export default BestSellers