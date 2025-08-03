import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'

function Header() {
  const navlinks = [
    { href: '#home', label: 'Home' },
    { href: '#story', label: 'Our Story' },
    { href: '#menu', label: 'Our Menu' },
    { href: '#sellers', label: 'Hot Sellers' },
    { href: '#contact', label: 'Contact Us' }
  ]
  const [Isopen,setIsopen] = useState(false)
  const toggle=()=>{
    setIsopen(!Isopen)
  }
  return (
    <div className='flex gap-3 items-center justify-between md: mx-auto px-10 h-16 w-full bg-[#d4a373] '>
      <div>
        <h1 className='text-white font-bold text-3xl'>Coffee.</h1>
      </div>
      <div className='hidden md:block'>
        <ul className='md:flex items-center gap-5'>
          {navlinks.map((item,index)=>{
            return(
              <li className='text-white font-semibold text-md hover:text-black duration-300' key={index} > <a href={item.href}>{item.label}</a> </li>
            )
          })}
        </ul>
      </div>
      <div onClick={toggle} className='md:hidden'>
        {!Isopen ? <Menu className='text-white font-semibold text-md' /> : <X className='text-white font-semibold text-md' />}
      </div>
      {
        Isopen && (
      <>
        <div className='absolute top-0 left-0 bg-[#faedcd] w-3/6 h-screen  md:hidden'>
        <ul className=' pt-20 flex flex-col justify-center items-center gap-10'>
          {navlinks.map((item,index)=>{
            return(
              <li className='text-black font-semibold text-md hover:text-white duration-300' key={index} > <a href={item.href}>{item.label}</a> </li>
            )
          })}
        </ul>
      </div>
      </>
        )
      }
    </div>
  )
}

export default Header