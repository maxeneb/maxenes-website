import React from 'react'
import Avatar from './Avatar'
import Cards from './Cards'

const AboutMe = () => {
  return (
      <div className='md:space-y-6 flex flex-col mt-5 md:flex-row gap-7 md:gap-8 items-center md:items-start mb-6 md:mb-8 md:mt-14'>
        <Avatar />
        
        <div className='flex-1 text-center md:text-left'>
          <h1 className="text-3xl md:text-4xl font-bold text-sage-dark mb-4 ">
            Maxene N. Borces 
          </h1>
          <p className='text-sage-dark text-sm md:text-base leading-relaxed md:mr-6'>
            I'm a curious learner who enjoys building functional solutions and bringing ideas through creative designs. 
            Outside work, I enjoy journaling, good music, and playing cozy games ୨ৎ
          </p>
        </div>
      </div>
  )
}

export default AboutMe