import React, { useContext, useEffect, useState } from "react";
import styles from "../css/BookYourStay.module.css";
import { DestinationContext } from "../context/DestinationContext";
import { MdArrowForward } from "react-icons/md";

export default function BookYourStay() {
  const { destinationData } = useContext(DestinationContext);
  const [hotels, setHotels] = useState([])

  useEffect(() => {
      fetch(`http://localhost:3000/hotel`)
      .then(res => res.json())
      .then(data => setHotels(data))
  }, [])
  console.log(hotels)

  return (
    <div className={styles.brDiv}>
      <div className={styles.main}>
        <div>
          <div className={styles.header}>
            <div>
              <p>Book Your Stay</p>
              <p>Select from a range of beautiful rooms</p>
            </div>
            <div>
              <p>{destinationData.checkIn}</p>
              <MdArrowForward className={styles.arrow} />
              <p>{destinationData.checkOut}</p>
            </div>
          </div>
          <div className={styles.roomList}>
            {hotels.map((data) => {
                return (
                    <div key={data.id} className={styles.list}>
                        <div>
                            <div className={styles.imageDiv}>
                                <img src={data.url_1} alt="" />
                            </div>
                            <div className={styles.paraDiv}>
                                <p>{data.name}</p>
                                <p>{data.desc}</p>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                )
            })}
          </div>
        </div>
        <div className={styles.summary}>
            Summary Section
        </div>
      </div>
    </div>
  );
}
