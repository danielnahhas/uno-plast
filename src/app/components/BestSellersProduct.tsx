import React from 'react'
import Image from 'next/image'
import { FaGlassWater } from "react-icons/fa6";
import { Tank } from '../constants';
import Link from 'next/link';

const BestSellerProduct = ({ product }: { product: Tank }) => {
  return (
    <Link href={`/products#${product.category}`} key={product.id} className='bg-white flex flex-col items-center rounded-lg border'>
        <div className='overflow-hidden w-full flex justify-center bg-slate-50 cursor-pointer'>
            <Image src={product.image} height={250} width={250} alt='product image' className='transition-transform hover:scale-125'/>
        </div>
        <div className='flex items-center w-full p-4 border-t'>
            <span className='border-r w-full text-center flex items-center'><FaGlassWater className='text-sm'/>: {product.capacity}L</span>
            <span className='border-r w-full text-center'><span className='font-bold'>H: </span>{product.height}CM</span>
            <span className='w-full text-end'><span className='font-bold'>D: </span>{product.diameter}CM</span>
        </div>
        <div className='w-full'>
            <button className='bg-primaryBlue hover:bg-darkerBlue text-white transition-colors w-full py-3 rounded-br-lg rounded-bl-lg'>View More</button>
        </div>
    </Link>
  )
}

export default BestSellerProduct