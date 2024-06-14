import Image from 'next/image';
import React from 'react';
import { FaLightbulb, FaHistory } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import img from '../../../public/cta-image.jpg'

const AboutUs = () => {
  return (
    <section className='px-4 lg:px-20 space-y-8 md:space-y-10 py-10'>

      <h2 className='text-4xl font-extrabold mb-12'>About Us</h2>
      
      <div className='flex items-start gap-6'>
        <div className='space-y-4 lg:w-1/2'>

          <div className='relative border-t border-dashed border-primaryBlue py-4 md:py-8'>
            <div className='flex items-center gap-2 bg-white text-primaryBlue pr-4 absolute top-0 -translate-y-1/2 left-0'>
              <FaLightbulb className='bg-white text-2xl md:text-4xl flex-shrink-0'/>
              <h3 className='text-lg md:text-xl font-bold'>What We Do</h3>
            </div>
            <p>
                Founded in 1986, UNOPLAST has over 30 years of experience and is the leading company in manufacturing robust plastic tanks made of food-grade materials. These tanks are suitable for storing all types of liquid chemicals.
            </p>
          </div>

          <div className='relative border-t border-dashed border-primaryBlue py-4 md:py-8'>
            <div className='flex items-center gap-2 bg-white text-primaryBlue pr-4 absolute top-0 -translate-y-1/2 left-0'>
              <GoGoal className='bg-white text-2xl md:text-4xl flex-shrink-0'/>
              <h3 className='text-lg md:text-xl font-bold'>Our Mission</h3>
            </div>
            <p>
                  At UNOPLAST, our mission is to provide high-quality, durable, and safe storage solutions for liquid chemicals through innovative manufacturing processes and a commitment to excellence.
            </p>
          </div>

          <div className='relative border-t border-dashed border-primaryBlue py-4 md:py-8'>
            <div className='flex items-center gap-2 bg-white text-primaryBlue pr-4 absolute top-0 -translate-y-1/2 left-0'>
              <FaHistory className='bg-white text-2xl md:text-4xl flex-shrink-0'/>
              <h3 className='text-lg md:text-xl font-bold'>Our History</h3>
            </div>
            <p>
              Since our founding in 1986, UNOPLAST has evolved from a small startup into an industry leader. Over the decades, we have expanded our product range, increased our manufacturing capacity, and entered new markets. Our commitment to quality and innovation has been the cornerstone of our success.
            </p>
          </div>
        </div>
        <Image src={img} alt='about us image' height={500} width={500} className='rounded-lg hidden lg:flex'/>
      </div>

    </section>
  );
}

export default AboutUs;
