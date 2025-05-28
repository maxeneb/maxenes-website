import React from 'react'
import Profile from './Profile'
import SocialLinks from './SocialLinks'

const HomePage = () => {
  return (
    <div className="w-full">
      <Profile />
        <div className="flex justify-center">
            <SocialLinks />
        </div>
    </div>
  )
}

export default HomePage
