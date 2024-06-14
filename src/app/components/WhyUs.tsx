'use client'
import React from 'react'
import qualityIcon from '../../../public/quality-icon.png'
import supportIcon from '../../../public/cs-icon.png'
import priceIcon from '../../../public/price.png'
import Image from 'next/image'
import { Slide } from 'react-awesome-reveal'

const WhyUs = () => {
  return (
    <section className='px-4 lg:px-20 py-10 md:py-20 space-y-4 md:space-y-8 bg-primaryBlue text-white'>
        <Slide direction='up' triggerOnce>
            <h2 className='text-3xl md:text-5xl font-extrabold'>Why Unoplast ?</h2>
        </Slide>
        <div className='space-y-4 md:space-y-0 md:grid grid-cols-3 md:gap-6'>
            <Slide direction='up' triggerOnce className='h-full'>
                <div className='space-y-3 flex flex-col justify-between border-b md:border-none pb-4'>
                    <Image src={qualityIcon} height={55} width={55} alt='quality icon' className='invert'/>
                    <h3 className='text-xl font-bold'>Superior Quality</h3>
                    <p className='font-light'>Our products are built to last with high-quality materials and craftsmanship. We ensure every water tank meets stringent standards for durability and reliability.</p>
                </div>
                <div className='space-y-3 flex flex-col justify-between border-b md:border-none pb-4'>
                    <Image src={supportIcon} height={60} width={60} alt='customer support icon' className='invert'/>
                    <h3 className='text-xl font-bold'>Exceptional Customer Support</h3>
                    <p className='font-light'>We prioritize our customers by offering prompt and friendly support. Our team is always ready to assist with any questions, installation help, or service needs.</p>
                </div>
                <div className='space-y-3 flex flex-col justify-between'>
                    <Image src={priceIcon} height={60} width={60} alt='competitive prices icon' className='invert'/>
                    <h3 className='text-xl font-bold'>Competitive Pricing</h3>
                    <p className='font-light'>We believe in providing top-notch products at prices that won't break the bank. Enjoy the best value for your money with our affordable and transparent pricing.</p>
                </div>
            </Slide>
        </div>
    </section>
  )
}

export default WhyUs