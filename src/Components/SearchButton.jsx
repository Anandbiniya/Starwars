import React, { useState, useEffect } from "react";
import axios from "axios";
function SearchButton() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((res) => {
        console.log(res.data);
        setAllData(res.data);
        setFilteredData(res.data);
      })
      .catch((err) => {
        console.log("error getting fake data" + err);
      });
  }, []);

  const handleSearch = (event) => {};
  return (
    <div>
      <div style={{ margin: "0 auto", marginTop: "10%" }}>
        <label>Search:</label>
        <input type="text" onChange={(event) => handleSearch(event)} />
      </div>
      <div style={{ padding: 10 }}>
        {filteredData.map((value, index) => {
          return (
            <div key={value.id}>
              <div style={styles}>{value.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchButton;
