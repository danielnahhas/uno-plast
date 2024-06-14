'use client'
import Link from 'next/link'
import React from 'react'
import { Slide } from 'react-awesome-reveal'

const CtaSection = () => {
  return (
    <section className='py-24 2xl:py-48 px-4 lg:px-20 w-full flex flex-col gap-6 items-center text-white _cta-bg'>
      <Slide direction='up' triggerOnce>
        <h3 className='font-thin text-xl text-center'>Our Services and Expertise</h3>
        <h2 className='text-4xl md:text-6xl font-extrabold text-center'>Over 20 years of excellence in producing and exporting Roto machines, molds, and equipment.</h2>
      </Slide>
      <Slide direction='up' triggerOnce>
        <Link href={'/contact-us'} className='inline-block bg-white text-black px-8 py-3 rounded-lg hover:bg-slate-200 transition-color'>Chat With Us</Link>
      </Slide>
    </section>
  )
}

export default CtaSection