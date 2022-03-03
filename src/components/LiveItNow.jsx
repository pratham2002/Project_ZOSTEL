import React from 'react'
import SelectDestinationForm from './SelectDestinationForm'
import styles from "../css/LiveItNow.module.css"

export default function LiveItNow() {
  return (
    <div className={styles.liveItNow}>
        <h1>Live it. Now</h1>
        <SelectDestinationForm />
    </div>
  )
}
