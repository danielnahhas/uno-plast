import React from 'react'
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from 'react-icons/fa6';

const ContactUs = () => {
  return (
    <section className='space-y-10'>
      <h2 className='text-4xl font-extrabold mt-10 ml-4 lg:ml-20'>Our Location</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.6843961325617!2d35.49463147480203!3d33.79464733128972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f1941cc35037d%3A0x73feda2d255b5d74!2sUno%20plast!5e0!3m2!1sen!2slb!4v1717333626082!5m2!1sen!2slb"
        height="350"
        allowFullScreen={true} loading="eager" referrerPolicy="no-referrer-when-downgrade" className='w-full rounded-lg px-4 lg:px-20'>
      </iframe>
      <div className='py-10 space-y-8 px-4 lg:px-20'>
        <h2 className='text-4xl font-extrabold text-center'>Get in Touch</h2>
        <div className='grid _contact-grid pb-10 gap-4'>
          <div className='flex flex-col items-center gap-4 rounded-lg p-3'>
            <FaWhatsapp className='text-4xl text-green-600'/>
            <p>+961 78 800 918</p>
            <a href='https://wa.me/96178800918' target='_blank' className='py-2 px-6 border rounded-lg hover:bg-green-600 hover:text-white transition-colors cursor-pointer'>Connect</a>
          </div>
          <div className='flex flex-col items-center gap-4 rounded-lg p-3'>
            <FaFacebook className='text-4xl text-blue-600'/>
            <p>UNOPLAST.LB</p>
            <a href='https://www.facebook.com/unoplast.lb/' target='_blank' className='py-2 px-6 border rounded-lg hover:bg-blue-600 hover:text-white transition-colors cursor-pointer'>Connect</a>
          </div>
          <div className='flex flex-col items-center gap-4 rounded-lg p-3'>
            <MdOutlineEmail className='text-4xl text-red-600'/>
            <p>adnanitani.1@gmail.com</p>
            <a href='mailto:adnanitani.1@gmail.com' target='_blank' className='py-2 px-6 border rounded-lg hover:bg-red-600 hover:text-white transition-colors cursor-pointer'>Connect</a>
          </div>
          <div className='flex flex-col items-center gap-2 rounded-lg p-3'>
            <MdOutlinePhone className='text-4xl'/>
            <h3 className='text-xl font-bold'>Call Us</h3>
            <p>+961 25 801 316</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs