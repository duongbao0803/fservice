import axios from "axios";
import React, { useState, useEffect } from "react";

function Test1() {
  const [buildings, setBuildings] = useState([]);
  const [floors, setFloors] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState(""); // Store the selected building
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    test();
    fetchFloorsForBuilding();
  }, []);
  // Fetch building data
  //   axios
  //     .get("https://fservices.azurewebsites.net/api/buildings")
  //     .then((response) => {
  //       setBuildings(response.data);
  //       setLoading(false); // Set loading to false after building data is fetched
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching building data:", error);
  //       setLoading(false); // Set loading to false in case of an error
  //     });
  // }, []);
  const test = async () => {
    let res = await axios.get(
      "https://fservices.azurewebsites.net/api/buildings"
    );
    console.log("check res", res);
  };
  // if (res && res.data)

  // Function to fetch floors based on the selected building
  const fetchFloorsForBuilding = async () => {
    let res = await axios.get(
      "https://fservices.azurewebsites.net/api/floors?buidingId=1"
    );
    console.log("checkBuild", res);
  };

  // .then((response) => {
  //   setFloors(response.data);
  // })
  // .catch((error) => {
  //   console.error("Error fetching floor data:", error);
  // });

  // Event handler when a building is selected
  const handleBuildingChange = (event) => {
    const selectedBuildingId = event.target.value;
    setSelectedBuilding(selectedBuildingId);
    fetchFloorsForBuilding(selectedBuildingId);
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <div className="mb-3">
        <label htmlFor="buildingSelect" className="form-label">
          Building
        </label>
        <select
          id="buildingSelect"
          onChange={handleBuildingChange}
          value={selectedBuilding}
        >
          {buildings.map((building) => (
            <option key={building.id} value={building.id}>
              {building.name}
            </option>
          ))}
        </select>
        <label htmlFor="floorSelect" className="form-label">
          Floor
        </label>
        <select id="floorSelect">
          {floors.map((floor) => (
            <option key={floor.id} value={floor.id}>
              {floor.no}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Test1;
