'use client'
import React from 'react'
import { categories } from '../constants'
import { useSearchParams } from 'next/navigation'
import Product from './Product'

const Products = () => {
  const searchParams = useSearchParams()
  const paramsCategory = searchParams.get('category') || ''

  return (
    <section className='mb-10 w-full h-fit'>
        <div className='px-4 lg:px-20 space-y-4 pt-10'>
          <h2 className='text-4xl font-extrabold'>Our Products</h2>
          <div className='flex flex-col gap-10'>
            {categories.filter(category => category.category.includes(paramsCategory)).map(category => (
              <div id={category.category} key={category.category} className='space-y-4'>
                <h2 className='text-2xl text-white w-full bg-primaryBlue rounded-lg shadow-lg p-3 capitalize'>{category.category} Tanks</h2>
                {category.products.map((product, i) => <Product key={i} product={product}/>)}
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Products