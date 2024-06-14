import React from 'react'
import AboutUs from '../components/AboutUs'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us",
  description: "Discover the story behind Unoplast, our mission, vision, and the passionate team dedicated to delivering innovative water tanks"
};

const page = () => {
  return <AboutUs/>
}

export default page