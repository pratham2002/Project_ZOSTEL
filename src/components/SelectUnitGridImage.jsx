import React, { useContext, useState } from "react";
import { DestinationContext } from "../context/DestinationContext";
import styles from "../css/SelectUnitGridImage.module.css";
import {
    MdTerrain,
    MdWifi,
    MdRoomService,
    MdOutlineWbIncandescent,
    MdLayers,
    MdVpnKey,
    MdLocalParking,
    MdCasino,
    MdOutlineBathtub,
    MdAirlineSeatIndividualSuite,
    MdLocalLaundryService,
    MdTv,
    MdRestaurant,
    MdFreeBreakfast,
} from "react-icons/md";

export default function SelectUnitGridImage() {
    const { destinationData } = useContext(DestinationContext);

    const [showMore, setShowMore] = useState(false);

    const text = `Zostel ${destinationData.destination} - offering a panoramic view of Hills & ${destinationData.destination} city - is 10 min walk from ${destinationData.destination} Palace and the main market. With its unmatched beauty and distinct cold desert charm, ${destinationData.destination} is frequently called ‘a paradise for travellers’. Traveling to ${destinationData.destination} is the perfect example of the phrase ‘Journey is as important as the destination’. Be it from the Manali route or the Srinagar route, the scenery on the way will leave you spellbound. ${destinationData.destination} is an oasis on the snowy desert all around and Zostel ${destinationData.destination} is an oasis in itself for travellers from all around the world visiting the city. With 6 bed and 4-bed dorms and several private rooms, our backpacker hostel is the best place to relax while you grasp the beauty of the valley around you. Come and chill in our rooftop cafe with fellow travelers while soaking in the beauty of ${destinationData.destination}.`;

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className={styles.imageGrid}>
            <div>
                <div></div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div>
                <div>
                    <h1>Zostel {destinationData.destination}</h1>
                    <div>
                        <p>{showMore ? text : `${text.substring(0, 270)}`}</p>
                        <p onClick={handleShowMore}>
                            {showMore ? "Show less" : "Show more"}
                        </p>
                    </div>
                </div>
                <div>
                    <h2>Aminities</h2>
                    <div>
                        <div>
                            <div>
                                <MdTerrain />
                            </div>
                            Mountain View
                        </div>
                        <div>
                            <div>
                                <MdWifi />
                            </div>
                            Free Wi-Fi
                        </div>
                        <div>
                            <div>
                                <MdRoomService />
                            </div>
                            24/7 Reception
                        </div>
                        <div>
                            <div>
                                <MdOutlineWbIncandescent />
                            </div>
                            Bedside Lamps
                        </div>
                        <div>
                            <div>
                                <MdLayers />
                            </div>
                            Towels on rent
                        </div>
                        <div>
                            <div>
                                <MdVpnKey />
                            </div>
                            Lockers
                        </div>
                        <div>
                            <div>
                                <MdLocalParking />
                            </div>
                            Parking Facility
                        </div>
                        <div>
                            <div>
                                <MdCasino />
                            </div>
                            Common hangout area
                        </div>
                        <div>
                            <div>
                                <MdOutlineBathtub />
                            </div>
                            Shower
                        </div>
                        <div>
                            <div>
                                <MdAirlineSeatIndividualSuite />
                            </div>
                            Linen Included
                        </div>
                        <div>
                            <div>
                                <MdLocalLaundryService />
                            </div>
                            Laundry Services (Extra)
                        </div>
                        <div>
                            <div>
                                <MdTv />
                            </div>
                            Common Television
                        </div>
                        <div>
                            <div>
                                <MdRestaurant />
                            </div>
                            Cafe
                        </div>
                        <div>
                            <div>
                                <MdFreeBreakfast />
                            </div>
                            Breakfast (Extra)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
