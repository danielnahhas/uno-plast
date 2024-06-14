'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo.svg';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import { RiCloseLargeLine, RiMenuLine } from "react-icons/ri";
import { usePathname, useSearchParams } from 'next/navigation';
import { IoMdHome, IoMdCall } from "react-icons/io";
import { FaPeopleGroup, FaGlassWater } from "react-icons/fa6";
import { IoLocation } from 'react-icons/io5';

const Header = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    const searchParams = useSearchParams()
    const productsCategory = searchParams.get('category') || null
    
    const path = usePathname();
    
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 250) {
            setTimeout(() => {
              setIsScrolling(true)
            }, 500)
          }
          else {
            setTimeout(() => {
              setIsScrolling(false)
            }, 500)
          }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <header className={`px-4 py-3 md:py-0 lg:px-20 sticky top-0 flex justify-between items-center shadow-sm z-20 bg-slate-50 transition-all ${isScrolling ? 'md:h-20' : 'md:h-32'}`}>
            <Link href={'/'}><Image height={undefined} width={undefined} src={logo} alt="logo" className={`h-16 w-16 transition-all ${isScrolling ? 'md:h-20 md:w-20' : 'md:h-28 md:w-28'}`}/></Link>
            <nav className="hidden md:flex items-center h-full">
                <Link href={'/'} className={`gap-1 aspect-square border-l h-full flex flex-col items-center justify-center px-16 hover:bg-primaryBlue hover:text-white ${path === '/' && 'bg-primaryBlue text-white'}`}>
                  <IoMdHome className={`text-2xl transition-all duration-300 ${isScrolling && 'h-0 w-0'}`}/>
                  <span className='text-sm'>Home</span>
                </Link>
                <div className={`cursor-pointer group relative gap-1 border-l h-full flex flex-col items-center justify-center ${path === '/products' && 'bg-primaryBlue text-white'}`}>
                  <Link href={'/products'} className='flex flex-col items-center justify-center gap-1 h-full w-full px-6 hover:bg-primaryBlue hover:text-white'>
                    <FaGlassWater className={`text-2xl transition-all duration-300 mx-auto ${isScrolling && 'h-0 w-0'}`}/>
                    <span className='text-sm transition-colors'>Products</span>
                  </Link>
                  <div className='text-black text-sm divide-y flex flex-col absolute w-48 group-hover:border-t group-hover:shadow-md left-0 bottom-0 translate-y-full bg-white transition-all h-0 group-hover:h-[135px] overflow-hidden'>
                    <Link href={'/products'} className={`${path.includes('products') && !productsCategory ? 'text-primaryBlue' : 'text-black' } py-3 hover:bg-primaryBlue hover:text-white transition-colors px-3`}>All</Link>
                    <Link href={'/products?category=vertical'} className={`${path.includes('products') && productsCategory === 'vertical' ? 'text-primaryBlue' : 'text-black' } py-3 hover:bg-primaryBlue hover:text-white transition-colors px-3`}>Vertical Tanks</Link>
                    <Link href={'/products?category=horizontal'} className={`${path.includes('products') && productsCategory === 'horizontal' ? 'text-primaryBlue' : 'text-black' } py-3 hover:bg-primaryBlue hover:text-white transition-colors px-3`}>Horizontal Tanks</Link>
                  </div>
                </div>
                <Link href={'/distributors'} className={`gap-1 border-l h-full flex flex-col items-center justify-center px-6 hover:bg-primaryBlue hover:text-white ${path === '/distributors' && 'bg-primaryBlue text-white'}`}>
                  <IoLocation className={`text-2xl transition-all duration-300 ${isScrolling && 'h-0 w-0'}`}/>
                  <span className='text-sm transition-colors'>Distributors</span>
                </Link>
                <Link href={'/about-us'} className={`gap-1 border-l h-full flex flex-col items-center justify-center px-6 hover:bg-primaryBlue hover:text-white ${path === '/about-us' && 'bg-primaryBlue text-white'}`}>
                  <FaPeopleGroup className={`text-2xl transition-all duration-300 ${isScrolling && 'h-0 w-0'}`}/>
                  <span className='text-sm transition-colors text-center'>About us</span>
                </Link>
                <Link href={'/contact-us'} className={`gap-1 border-l h-full flex flex-col items-center justify-center px-6 hover:bg-primaryBlue hover:text-white ${path === '/contact-us' && 'bg-primaryBlue text-white'}`}>
                  <IoMdCall className={`text-2xl transition-all duration-300 ${isScrolling && 'h-0 w-0'}`}/>
                  <span className='text-sm transition-colors text-center'>Contact us</span>
                </Link>
            </nav>
            <button aria-label='toggle-sidebar' onClick={() => setOpenSidebar(!openSidebar)} className='md:hidden text-3xl cursor-pointer z-20 bg-transparent'>{openSidebar ? <RiCloseLargeLine/> : <RiMenuLine/>}</button>
            <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} productsCategory={productsCategory}/>
        </header>
    );
};

export default Header;
