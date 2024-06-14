import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo.svg'
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { RiFacebookCircleLine } from "react-icons/ri";
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-slate-50 px-4 lg:px-20 text-sm mt-auto">
        <div className="mx-auto w-full max-w-screen-xl py-6 lg:py-8">
            <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 mr-8">
                <a href="/" className="flex items-center">
                    <Image alt='logo' quality={100} height={undefined} width={undefined} src={logo} className='h-24 w-24 md:w-32 md:h-32'/>
                </a>
            </div>
            <div className="grid md:grid-cols-2 gap-8 sm:gap-6">
                <div>
                    <h2 className="mb-6 text-sm font-semibold uppercase">Pages</h2>
                    <ul className="font-medium">
                        <li className="mb-4">
                            <Link href="/" className="hover:underline opacity-90">Home</Link>
                        </li>
                        <li className='mb-4'>
                            <Link href="/products" className="hover:underline opacity-90">Products</Link>
                        </li>
                        <li className='mb-4'>
                            <Link href="/distributors" className="hover:underline opacity-90">Distributors</Link>
                        </li>
                        <li className='mb-4'>
                            <Link href="/about-us" className="hover:underline opacity-90">About Us</Link>
                        </li>
                        <li>
                            <Link href="/contact-us" className="hover:underline opacity-90">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold uppercase">Contact us</h2>
                    <ul className="font-medium space-y-4">
                        <li className="flex items-center gap-2">
                            <MdOutlineEmail className='text-2xl'/>
                            <a href='mailto:adnanitani.1@gmail.com' target='_blank' className="hover:underline opacity-90 cursor-pointer">adnanitani.1@gmail.com</a>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaWhatsapp className='text-2xl'/>
                            <a href='https://wa.me/96178800918' target='_blank' className='hover:underline opacity-90 cursor-pointer'>+961 78 800 918</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <RiFacebookCircleLine className='text-2xl'/>
                            <a href="https://www.facebook.com/unoplast.lb/" className="hover:underline opacity-90 cursor-pointer">Unoplast.lb</a>
                        </li>
                        <li className='flex items-center gap-2'>
                            <MdOutlinePhone className='text-2xl'/>
                            <span className="opacity-90">+961 25 801 316</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="flex justify-center">
            <span className="text-sm text-center">© {new Date().getFullYear()} Unoplast™ All Rights Reserved.</span>
        </div>
        </div>
    </footer>
  )
}

export default Footer