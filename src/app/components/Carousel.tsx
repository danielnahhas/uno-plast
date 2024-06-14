'use client'
import Image from 'next/image'
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { Product } from '../constants'
import { Rubik } from 'next/font/google'
 
const rubik = Rubik({ subsets: ['arabic'] })

const Carousel = ({ images, setActiveIndex, activeIndex, disableAutoScroll, setDisableAutoScroll, product }: { images: string[], activeIndex: number, setActiveIndex: Dispatch<SetStateAction<number>>, disableAutoScroll: boolean, setDisableAutoScroll: Dispatch<SetStateAction<boolean>>, product: Product }) => {
    
    const handleNext = () => {
        if (activeIndex === images.length - 1) setActiveIndex(0)
        else setActiveIndex(prev => prev + 1)
        !disableAutoScroll && setDisableAutoScroll(true)
    }

    const handlePrev = () => {
        if (activeIndex === 0) setActiveIndex(images.length - 1)
        else setActiveIndex(prev => prev - 1)
        !disableAutoScroll && setDisableAutoScroll(true)
    }

    useEffect(() => {
        if (!disableAutoScroll) {
            const intervalId = setInterval(() => {
                setActiveIndex(prevIndex => {
                    if (prevIndex === images.length - 1) return 0;
                    else return prevIndex + 1;
                });
            }, 4000);
        
            return () => clearInterval(intervalId);
        }
    }, [disableAutoScroll]);

    const activeVariation  = product.variations.find((_v, i) => i === activeIndex)

  return (
    <div className="relative overflow-x-hidden w-full sm:w-80 2xl:w-96">
        <div className="flex relative overflow-hidden rounded-lg bg-slate-50">
            {images.map(img => (
            <div style={{ transform: `translateX(${activeIndex * -100}%)` }} className="rounded-lg duration-700 transition-translate ease-in-out w-full h-full shrink-0">
                <Image height={300} width={300} src={img} className="w-full h-full object-cover rounded-lg" alt="product image"/>
            </div>
            ))}
            <button onClick={handlePrev} type="button" className="absolute top-0 start-0 flex items-center justify-center h-full px-4 cursor-pointer group hover:bg-primaryBlue/40 focus:outline-none bg-transparent">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full">
                    <svg className="w-4 h-4 text-primaryBlue group-hover:text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button onClick={handleNext} type="button" className="absolute top-0 end-0 flex items-center justify-center h-full px-4 cursor-pointer group hover:bg-primaryBlue/40 focus:outline-none bg-transparent">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full">
                    <svg className="w-4 h-4 text-primaryBlue group-hover:text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
            {activeVariation?.type && <span className={`${rubik.className} absolute left-0 top-0 font-bold text-sm rounded-br-lg bg-primaryBlue text-white p-2`}>{activeVariation?.type}</span>}
        </div>
        <div className="flex items-center justify-center gap-3 mt-4 rtl:space-x-reverse">
                {images.map((_, i) => <button onClick={() => {
                    setActiveIndex(i)
                    !disableAutoScroll && setDisableAutoScroll(true)
                }} type="button" className={`w-2 h-2 rounded-full ${activeIndex === i ? 'bg-primaryBlue' : 'bg-black/50'}`}></button> )}
        </div>
    </div>
  )
}

export default Carousel