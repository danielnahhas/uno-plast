'use client'
import React, { useState } from 'react'
import { distributors } from '../constants'
import { IoMdCall } from "react-icons/io";
import { IoLocation } from 'react-icons/io5';

const Distributors = () => {


  const [activeCity, setActiveCity] = useState<null | string>(null)

  const filteredDistributors = activeCity ?  distributors.filter(distributor => distributor.city.toLowerCase() === activeCity) : distributors 

  return (
    <section className='py-10 w-full'>
        <div className='px-4 lg:px-20 space-y-4'>
          <div className="flex items-center flex-wrap gap-4">
            <h2 className='text-4xl font-extrabold'>Find a Distributor</h2>
            <select onChange={(e) => setActiveCity(e.target.value === 'Choose a City' ? null : e.target.value.toLowerCase())} id="Manufacturer" className="text-sm rounded-full block p-2.5 border-r-[10px] border-white bg-white outline outline-1 outline-gray-300">
              <option selected={activeCity === null}>Choose a City</option>
              {distributors.map(distributor => <option selected={distributor.city.toLowerCase() === activeCity} key={distributor.city} className='capitalize'>{distributor.city}</option>)}
            </select>
            {activeCity ? (
              <button onClick={() => setActiveCity(null)} className='bg-red-600 text-white rounded-full p-2.5 text-sm'>Reset Filters</button>
            ) : null}
          </div>
          <div className='_distributors-grid grid gap-6'>
            {filteredDistributors.map(distributor => (
              <div className='border rounded-lg'>
                <iframe
                  src={distributor.location}
                  height="350"
                  allowFullScreen={true} loading="eager" referrerPolicy="no-referrer-when-downgrade" className='w-full rounded-tr-lg rounded-tl-lg'>
                </iframe>
                <div className='text-sm grid _distributor-info-grid py-3 px-2 md:px-4'>
                  <span className='w-full font-bold border-r'>{distributor.name}</span>
                  <div className='w-full flex items-center justify-center gap-1 border-r px-4 sm:px-10'>
                    <IoLocation className='md:text-lg'/>
                    <span>{distributor.city}</span>
                  </div>
                  <div className='w-full flex items-center justify-end gap-1'>
                    <IoMdCall className='md:text-lg'/>
                    <span>{distributor.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredDistributors.length === 0 && (activeCity) ? <p className='text-2xl text-center py-20'>No distributors matched your search.</p> : ''}
        </div>
    </section>
  )
}

export default Distributors