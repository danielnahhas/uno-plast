'use client'
import React, { Dispatch, SetStateAction } from 'react'
import { Variation } from '../constants'

const VariationsTable = ({ variations, activeIndex, setActiveIndex, disableAutoScroll, setDisableAutoScroll }: { variations: Variation[], activeIndex: number, setActiveIndex: Dispatch<SetStateAction<number>>, disableAutoScroll: boolean, setDisableAutoScroll: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-white bg-primaryBlue">
                <tr>
                {Object.entries(variations[0]).filter(([key]) => key !== 'type').map(([key], i) => (
                    <th key={i} scope="col" className="px-6 py-3">
                        {key}
                    </th>
                ))}
                </tr>
            </thead>
            <tbody>
                {variations.map((variation, i) => (
                    <tr onClick={() => {
                        setActiveIndex(i)
                        !disableAutoScroll && setDisableAutoScroll(true)
                    }} className={`cursor-pointer border-b hover:bg-slate-100 ${activeIndex === i ? 'bg-slate-100' : 'bg-white'}`}>
                        {Object.entries(variation).filter(([key]) => key !== 'type').map(([_key, value], i) => (
                            <td key={i} className="px-6 py-4">
                                {value}
                            </td>
                        ))}                       
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default VariationsTable