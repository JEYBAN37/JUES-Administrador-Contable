import React from 'react'
import { footerData } from '../data/data.js';


const Footer = () => {
  return (
  
    <section className='py-10'>
          
      <aside className='flex flex-col items-center text-white'>
        <h1 className='font-semibold text-2xl'>{footerData.header.title}</h1>
        <p className=' max-w-[705px] text-xs text-center'>
          {footerData.header.subTitle}
        </p>
        <div className=' max-w-[705px] text-xs text-center'>
          <h2 >{footerData.header.text}</h2>
          <h3> {footerData.header.final}</h3>
        
          </div>
        
      </aside>
    
    </section>
   
)}
export default Footer;