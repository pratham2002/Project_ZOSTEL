import React from 'react'
import BookYourStay from './BookYourStay'
import Navbar from './Navbar/Navbar'
import SelectUnitGridImage from './SelectUnitGridImage'

export default function HotelBookingPage() {
  return (
    <div>
      <Navbar />
      <SelectUnitGridImage/>
      <BookYourStay/>
    </div>
  )
}
