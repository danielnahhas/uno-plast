import React from 'react'
import ContactUs from '../components/ContactUs'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Unoplast. We're here to assist you with any questions, feedback, or support you need. Reach out to our dedicated team today"
};

const page = () => {
  return <ContactUs/>
}

export default page