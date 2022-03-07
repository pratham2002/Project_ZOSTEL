import React, { useContext, useEffect, useState } from "react";
import { DestinationContext } from "../context/DestinationContext";
import { SelectRoomContext } from "../context/SelecdRoomContext";
import styles from "../css/ConfirmYourBooking.module.css";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router";
import Footer from "./Footer";

export default function ConfirmYourBooking() {
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const handleUserDataChange = (e) => {
    const { name, value } = e.currentTarget;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const { destinationData } = useContext(DestinationContext);
  const { selectRoomData } = useContext(SelectRoomContext);
  const [totalSum, setTotalSum] = useState(0);

  const DestinationDateIn =
    destinationData.checkIn[8] + destinationData.checkIn[9];
  const DestinationDateOut =
    destinationData.checkOut[8] + destinationData.checkOut[9];
  const stayDay = Number(DestinationDateOut - DestinationDateIn);

  useEffect(() => {
    var sum = 0;
    for (var i = 0; i < selectRoomData.length; i++) {
      sum += selectRoomData[i].price;
    }
    setTotalSum(sum);
  }, [selectRoomData]);

  const handleReserveClick = () => {

    if (userData.fname && userData.email && userData.address && userData.number ) {

      fetch("http://localhost:3000/userBooking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
  
      alert("Reservation Confirmed");
      navigate("/");
    }
    else {
      alert("Fill all the Required Details")
    }

  };

  return (
    <>
      <div className={styles.confirmMain}>
        <div>
          <MdArrowBack style={{ fontSize: "43px", cursor: "pointer" }} />
          <h2>Confirm your booking</h2>
        </div>
        <div>
          <div className={styles.mainForm}>
            <div>
              <p>Guest Information</p>
            </div>
            <div className={styles.inputField}>
              <div>
                <div>
                  <label>
                    Name<sup className={styles.star}>*</sup>
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    name="fname"
                    value={userData.fname}
                    onChange={handleUserDataChange}
                    placeholder="Select the first name"
                  />
                  <input
                    type="text"
                    name="mname"
                    value={userData.mname}
                    onChange={handleUserDataChange}
                    placeholder="Select the middle name"
                  />
                  <input
                    type="text"
                    name="lname"
                    value={userData.lname}
                    onChange={handleUserDataChange}
                    placeholder="Select the last name"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label>
                    Gender<sup className={styles.star}>*</sup>
                  </label>
                </div>
                <div>
                  <select
                    name="gender"
                    value={userData.gender}
                    onChange={handleUserDataChange}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <div>
                  <label>
                    Email<sup className={styles.star}>*</sup>
                  </label>
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleUserDataChange}
                    placeholder="Select the Email"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label>
                    Number<sup className={styles.star}>*</sup>
                  </label>
                </div>
                <div>
                  <input
                    type="number"
                    name="number"
                    value={userData.number}
                    onChange={handleUserDataChange}
                    placeholder="Select the number"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label>
                    Address<sup className={styles.star}>*</sup>
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    name="address"
                    value={userData.address}
                    onChange={handleUserDataChange}
                    placeholder="Select the Address"
                    style={{ height: "120px" }}
                  />
                </div>
              </div>
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
              <button onClick={handleReserveClick}>Reserve</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
