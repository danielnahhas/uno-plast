'use client'
import Image from 'next/image'
import React from 'react'
import hero from '../../../public/hero.jpg'
import Link from 'next/link'
import { Slide } from 'react-awesome-reveal'

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-center py-32 2xl:py-60">
        <Image loading='eager' height={undefined} width={undefined} alt='hero section garden with water tank' className="absolute h-full w-full object-cover -scale-x-100 -z-10 brightness-[0.3] grayscale-[0.6]" src={hero}/>
        <div className="text-white px-4 lg:px-20 lg:w-2/3 space-y-3 md:space-y-6">
          <Slide triggerOnce={true}>
            <h1 className="text-5xl md:text-6xl font-extrabold">Buy Reliable Water Tanks</h1>
            <p className="text-sm md:text-xl font-light">Find the perfect water tank for your home or business. Our tanks ensure a steady and safe water supply with unmatched durability. Shop now for top-quality water storage solutions.</p>
            <Link href={'/products'} className="inline-block py-3 px-8 md:text-xl rounded-lg bg-primaryBlue hover:bg-darkerBlue transition-colors">Shop Now &#x279C;</Link>
          </Slide>
        </div>
    </section>
  )
}

export default Hero