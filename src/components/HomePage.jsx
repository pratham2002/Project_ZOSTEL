import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import LiveItNow from "../components/LiveItNow";
import Destination from "./Destination/Destination"
import Whatsnew from "./Whatsnew/Whatsnew"
import Zostelhomes from "./Home/Zostelhome"
import Featuredhostel from "./Featuredhostel/Featurehostel"
import Guest from "./Guestreview/Guest"
import Awards from "./Awards/Awards"
import Footer from './Footer';

export default function HomePage() {
  return (
    <div>
        <Navbar />
        <LiveItNow />
        <Destination />
        <Whatsnew />
        <Zostelhomes />
        <Featuredhostel />
        <Guest />
        <Awards/>
        <Footer />
    </div>
  )
}
