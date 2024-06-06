import React from 'react'
import { VelocityScroll } from './ui/scroll-based-velocity'


const MarqueeLanguages = () => {
  return (
    <div className='w-screen h-fit bg-[#1E1A1A]'>
        
        <VelocityScroll default_velocity={1} className='text-6xl font-semibold tracking-wider bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent' text="JAVASCRIPT TYPESCRIPT PYTHON MERN NEXT-JS" />
    </div>
  )
}

export default MarqueeLanguages