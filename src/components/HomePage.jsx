import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import LiveItNow from "../components/LiveItNow";
import Footer from './Footer';

export default function HomePage() {
  return (
    <div>
        <Navbar />
        <LiveItNow />
        <Footer />
    </div>
  )
}
