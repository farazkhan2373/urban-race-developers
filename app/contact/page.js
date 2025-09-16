import ContactBanner from '@/components/ContactPageComponents/ContactBanner'
import ContactHomePage from '@/components/HomePageComponents/ContactHomePage'
import MapSection from '@/components/HomePageComponents/MapSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <ContactBanner/>
      <ContactHomePage/>
      <MapSection/>
    </div>
  )
}

export default page
