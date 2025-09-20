import AboutBanner from '@/components/AboutPageComponents/AboutBanner'
import AboutInfo from '@/components/AboutPageComponents/AboutInfo'
import MissonVission from '@/components/AboutPageComponents/MissonVission'
import Team from '@/components/AboutPageComponents/Team'
import React from 'react'

const page = () => {
  return (
    <div className=''>
      <AboutBanner/>
      <AboutInfo/>
      <MissonVission/>
      {/* <Team/> */}
    </div>
  )
}

export default page
