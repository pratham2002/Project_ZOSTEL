import React, { useContext, useEffect, useState } from "react";
import styles from "../css/BookYourStay.module.css";
import { DestinationContext } from "../context/DestinationContext";
import { MdArrowForward } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { SelectRoomContext } from "../context/SelecdRoomContext";
import { useNavigate } from "react-router";

export default function BookYourStay() {
  
  const { destinationData } = useContext(DestinationContext);
  const { selectRoomData, setSelectRoomData } = useContext(SelectRoomContext);
  const [hotels, setHotels] = useState([]);
  const [totalSum, setTotalSum] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://fake-jsserver-app.herokuapp.com/hotel`)
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);

  const handleSelectRoom = (unit, price) => { 
    setSelectRoomData([...selectRoomData, { unit, price }]);
  };

  const DestinationDateIn = destinationData.checkIn[8] + destinationData.checkIn[9];
  const DestinationDateOut = destinationData.checkOut[8] + destinationData.checkOut[9];
  const stayDay = Number(DestinationDateOut - DestinationDateIn);

  useEffect(() => {
    var sum = 0;
    for (var i = 0; i < selectRoomData.length; i++) {
      sum += selectRoomData[i].price;
    }
    setTotalSum(sum);
  }, [selectRoomData]);

  const handleBookNow = () => {
    navigate("/confirnyourbooking")
  }

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
                      <div>
                        <MdPerson />
                        <span> x 1</span>
                      </div>
                      <p>{data.desc}</p>
                      <p>Availability calender</p>
                    </div>
                  </div>
                  <div className={styles.roomSelect}>
                    {data.availability.map((item) => {
                      return (
                        <button
                          key={item.avId}
                          onClick={() =>
                            handleSelectRoom(item.units, data.price)
                          }
                        >
                          <p>{item.date}</p>
                          <p className={styles.x}>
                            {item.units === 0 ? `x` : `₹ ${data.price}`}
                          </p>
                          <p>
                            {item.units === 0
                              ? `No units`
                              : `${item.units} units`}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.summary}>
          <div>
            <h2>Summary</h2>
            <p>
              <p>{stayDay} night</p>
              <p>starting from</p>
              <p>{destinationData.checkIn}</p>
            </p>
          </div>
          <div>
            <div></div>
            <div>
              <p>Tax</p>
              <p>₹0</p>
            </div>
            <div>
              <p>Total (tax incl.)</p>
              <p>{`₹${totalSum}`}</p>
            </div>
            <div>
              <p>Payable Now</p>
              <p>{`₹${totalSum}`}</p>
            </div>
            <button onClick={handleBookNow}>Book now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
