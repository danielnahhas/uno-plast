import React from 'react'
import Distributors from '../components/Distributors'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Distributors",
  description: "Locate an authorized Unoplast distributor near you."
};

const page = () => {
  return <Distributors/>
}

export default page