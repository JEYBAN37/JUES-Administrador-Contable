import React from 'react'
import { HeaderData } from '../data/data'


const Header = () => {
  return (
    <header className='fixed flex  z-50 pt-10 pb-4 w-screen  bg-opacity-0  transition-colors duration-500 justify-center gap-40 lg:justify-around lg:gap-96'>
      
      <img src={HeaderData.logo.icon} alt={HeaderData.logo.title} className=''/>
     <a href={HeaderData.logo.linkHero}><img src={HeaderData.logo.closed} alt={HeaderData.logo.title} className='h-20 w-20'/></a>
    </header>
  )
}

export default Header
