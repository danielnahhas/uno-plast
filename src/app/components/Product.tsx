import React, { useState } from 'react'
import Image from 'next/image'
import VariationsTable from './VariationsTable'
import Carousel from './Carousel'
import { Product as ProductType } from '../constants'
import { GiWaterDrop } from "react-icons/gi";

const Product = ({ product }: { product: ProductType }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [disableAutoScroll, setDisableAutoScroll] = useState(false)

    const countDroplets = (capacity: string) => {
      if (capacity === 'low') return (
        <GiWaterDrop/>
      )
      else if (capacity === 'medium') return (
        <>
          <GiWaterDrop/>
          <GiWaterDrop/>
        </>
      )
      else return (
        <>
        <GiWaterDrop/>
        <GiWaterDrop/>
        <GiWaterDrop/>
        </>
      )
    }

  return (
    <div className='flex flex-col md:flex-row items-center md:gap-8 pb-10 last:pb-0'>
        {product.images.length > 1 ?
        <Carousel product={product} images={product.images} activeIndex={activeIndex} setActiveIndex={setActiveIndex} disableAutoScroll={disableAutoScroll} setDisableAutoScroll={setDisableAutoScroll}/>
        :
        <Image src={product.images[0]} height={300} width={300} alt='category image' className='w-full sm:w-80 2xl:w-96 mx-auto sm:mx-0 rounded-lg bg-slate-50'/>
        }
        <div className='space-y-2 w-full flex-1 max-w-[1000px] mt-4 md:mt-0'>
          {product.capacity && 
          <div className='text-xl flex items-center gap-3'>
            <div className='flex items-center'>{countDroplets(product.capacity)}</div>
            <span className='capitalize'>{product.capacity} Capacity</span>
          </div>
          }
          <VariationsTable variations={product.variations} activeIndex={activeIndex} setActiveIndex={setActiveIndex} disableAutoScroll={disableAutoScroll} setDisableAutoScroll={setDisableAutoScroll}/>
        </div>
    </div>
  )
}

export default Product