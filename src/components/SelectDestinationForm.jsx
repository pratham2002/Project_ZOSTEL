import React, { useContext, useEffect, useState } from "react";
import { DestinationContext } from "../context/DestinationContext";
import styles from "../css/SelectDestinationForm.module.css";

export default function SelectDestinationForm() {
  const [data, setData] = useState({});
  const [bool, setBool] = useState(false)

  const { setDestinationData } = useContext(DestinationContext);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleClick = () => {
    localStorage.setItem("data", JSON.stringify(data))
    setBool(!bool)
  };

  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("data")) || {}
    setDestinationData(localData);
  }, [bool, setDestinationData])

  const options = [
    "Delhi",
    "Chennai",
    "Alleppey",
    "Bangalore",
    "Chitkul",
    "Dalhousi",
    "Dobhi",
    "Gokarna",
    "Jaisalmer",
    "Kathmandu",
    "Kodaikanal",
    "Leh",
    "Mumbai",
    "Mussoorie",
    "Ooty",
    "Pokhara",
    "Rishikesh",
    "Sissu",
    "Udaipur",
    "Varkala",
    "Aurangabad",
    "Barot",
    "Coorg",
    "Gangtok",
    "Jaipur",
    "Jodhpur",
    "Kochi",
    "Kolad",
    "Manali",
    "Mukteshwar",
    "Munnar",
    "Mysore",
    "Panchgani",
    "Pushkar",
    "Shangarh",
    "Spiti",
    "Vagamon",
    "Wayanad",
    "Bir 2.0",
  ].sort();

  return (
    <div className={styles.form}>
      <div>
        <button>ZOSTEL</button>
        <button>ZOSTEL HOMES</button>
      </div>
      <div>
        <select
          name="destination"
          value={data.destination}
          onChange={handleChange}
        >
          <option value="">SELECT DESTINATION</option>
          {options.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <input
          name="checkIn"
          value={data.checkIn}
          type="date"
          onChange={handleChange}
        />
        <input
          name="checkOut"
          value={data.checkout}
          type="date"
          onChange={handleChange}
        />
        <button onClick={handleClick}>BOOK NOW</button>
      </div>
    </div>
  );
}
