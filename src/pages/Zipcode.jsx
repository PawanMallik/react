import axios from "axios";
import React, { useEffect, useState } from "react";

const Zipcode = () => {
  const [data, setData] = useState(null);
  const [zipcode, setZipcode] = useState("")

  const getData = async () => {
    try {
      const respose = await axios.get(`https://api.zippopotam.us/in/${zipcode}`);
      setData(respose.data);
      // console.log(respose.data.places[0]["place name"]);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="zip">
      <h2>Zipcode Info (india)</h2>
      <input type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} placeholder="search zipcode" />
      <button onClick={getData}>check</button>

      {data && data.places &&(
      <div className="zipD">
        <p><strong>Country:</strong> {data.country}</p>
        <p><strong>Place Name:</strong> {data.places[0]["place name"]}</p>
        <p><strong>State:</strong> {data.places[0].state}</p>
        <p><strong>Latitude:</strong> {data.places[0].latitude}</p>
        <p><strong>Longitude:</strong> {data.places[0].longitude}</p>
      </div>
      )}
    </div>
  );
};

export default Zipcode;
