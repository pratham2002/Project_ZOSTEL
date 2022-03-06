import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar/Navbar'
import SelectDestinationForm from '../SelectDestinationForm'

import styles from"./booknow.module.css"

export default function BOOKNOW() {
  return (
    <div>
        <Navbar/>
        <div className={styles.liveItNow}>
        <h1>Zostel Exclusive Stays</h1>
        <SelectDestinationForm />
    </div>
        <Footer/>
    </div>
  )
}
