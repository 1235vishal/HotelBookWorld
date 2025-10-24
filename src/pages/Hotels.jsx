import React from 'react'
import HotelHero from '../pages/Common/HotelHero';
import AllRooms from './Hotels/AllRooms';
import Footer from './Common/Footer';

const Hotels = () => {
  return (
      <>
          <HotelHero />
          <AllRooms />
        <Footer />
      </>
  )
}

export default Hotels