import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import LiveItNow from "../components/LiveItNow";
import Destination from "./Destination/Destination"
import Whatsnew from "./"
import Footer from './Footer';

export default function HomePage() {
  return (
    <div>
        <Navbar />
        <LiveItNow />
        <Destination />
        <Whatsnew />
        <Footer />
    </div>
  )
}
