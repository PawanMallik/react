import axios from "axios";
import React, { useState } from "react";

const Image = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // loading state

  const getData = async () => {
    if (!total || isNaN(total) || total <= 0) {
      setError("Please enter a valid positive number.");
      setData([]);
      return;
    }

    setError("");
    setLoading(true); // start loading
    setData([]); // optional: clear previous data

    try {
      const request = await axios.get(
        `https://picsum.photos/v2/list?page=1&limit=${total}`
      );
      setData(request.data);
    } catch (error) {
      setError("Failed to fetch images.");
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Picsum Image Gallery</h2>

      <input
        type="number"
        placeholder="How many images do you want?"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
        style={{ padding: "8px", width: "250px", marginRight: "10px" }}
      />
      <button onClick={getData} style={{ padding: "8px 16px" }}>{loading ? "Loadingg..." : "Search"}</button>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        {data.map((item) => (
          <img
            key={item.id}
            src={item.download_url}
            alt={item.author}
            style={{
              width: "200px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
          />
        ))}
      </div>

      {loading && (
        <p style={{ fontSize: "18px" }}>Fetching images, please wait...</p>
      )}
    </div>
  );
};

export default Image;
