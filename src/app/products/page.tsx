import React, { Suspense } from 'react'
import Products from '../components/Products'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Unoplast's diverse range of high-quality Water Tanks designed to meet your needs"
};

const page = () => {
  return (
    <Suspense>
      <Products/>
    </Suspense>
  )
}

export default page