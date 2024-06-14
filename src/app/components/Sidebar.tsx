'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa6'

const Sidebar = ({ openSidebar, setOpenSidebar, productsCategory }: { openSidebar: boolean, setOpenSidebar: Dispatch<SetStateAction<boolean>>, productsCategory: string | null }) => {

  const path = usePathname()
  const [openDropdown, setOpenDropdown] = useState(false)

  useEffect(() => {
    setOpenSidebar(false)
    !path.includes('products') && setOpenDropdown(false)
  }, [path, productsCategory])

  return (
    <aside className={`lg:hidden flex flex-col gap-4 pt-20 pl-8 fixed inset-y-0 right-0 bg-white shadow-lg w-72 transition-all ease-in-out duration-500 ${openSidebar ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} z-10`}>
        <Link href={'/'} className={`w-fit border-b-2 ${path === '/' ? 'border-primaryBlue' : 'border-transparent'}`}>Home</Link>
        <div className='flex flex-col w-fit'>
          <button onClick={() => setOpenDropdown(!openDropdown)} className={`relative flex items-center gap-1 border-b-2 w-min ${path.includes('products') ? 'border-primaryBlue' : 'border-transparent'}`}>
            {openDropdown ? <FaChevronDown className='text-xs w-min absolute -left-1 -translate-x-full'/> : <FaChevronRight className='text-xs w-min absolute -left-1 -translate-x-full'/>}
            <span>Products</span>
          </button>
          <div className={`flex flex-col font-thin gap-2 text-sm ml-2 transition-all overflow-hidden ${openDropdown ? 'h-20 mt-2 w-fit' : 'h-0 w-0 mt-0'}`}>
            <Link href={'/products'} className={`${path.includes('products') && !productsCategory ? 'text-primaryBlue' : 'text-black' }`}>All</Link>
            <Link href={'/products?category=vertical'} className={`${path.includes('products') && productsCategory === 'vertical' ? 'text-primaryBlue' : 'text-black' }`}>Vertical Tanks</Link>
            <Link href={'/products?category=horizontal'} className={`${path.includes('products') && productsCategory === 'horizontal' ? 'text-primaryBlue' : 'text-black' }`}>Horizontal Tanks</Link>
          </div>
        </div>
        <Link href={'/about-us'} className={`w-fit border-b-2 ${path === '/about-us' ? 'border-primaryBlue' : 'border-transparent'}`}>About Us</Link>
        <Link href={'/contact-us'} className={`w-fit border-b-2 ${path === '/contact-us' ? 'border-primaryBlue' : 'border-transparent'}`}>Contact Us</Link>
        <Link href={'/distributors'} className={`w-fit border-b-2 ${path === '/distributors' ? 'border-primaryBlue' : 'border-transparent'}`}>Distributors</Link>
    </aside>
  )
}

export default Sidebar