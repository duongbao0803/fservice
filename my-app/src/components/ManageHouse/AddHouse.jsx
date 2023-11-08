import React, { useState, useEffect } from "react";
import {
  getApartmentByFloor,
  getBuilding,
  getFloor,
} from "../../services/UserService";

function AddHouse() {
  const [buildings, setBuildings] = useState([]);
  const [floors, setFloors] = useState([]);
  const [apartments, setApartments] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState("");
  const [selectedFloor, setSelectedFloor] = useState("");

  useEffect(() => {
    fetchBuilding();
  }, []);

  const fetchBuilding = async () => {
    try {
      const res = await getBuilding();
      console.log("check buiding", res.data);
      if (res && res.status === 200) setBuildings(res.data);
      const choose = buildings.map((building) => building.id);
      console.log("check choose", choose);
    } catch (error) {
      console.log("Error Fetching Buildings", error);
    }
  };

  const fetchFloor = async (buildingId) => {
    try {
      const res = await getFloor(buildingId);
      console.log("check floor", res.data);
      if (res && res.status === 200) {
        setFloors(res.data);
      }
    } catch (error) {
      console.log("Error Fetching Floors", error);
    }
  };

  const fetchApartmentByFloor = async (floorId) => {
    try {
      const res = await getApartmentByFloor(floorId);
      console.log("check apartment", res.data);

      if (res && res.status === 200) {
        setApartments(res.data);
      }
    } catch (error) {
      console.log("Error Fetching Apartments", error);
    }
  };

  const handleBuildingChange = (event) => {
    const selectedBuildingId = event.target.value;
    console.log("check selectedBUidingID", selectedBuildingId);
    setSelectedBuilding(selectedBuildingId);
    fetchFloor(selectedBuildingId);
  };

  const handleFloorChange = (event) => {
    const selectedFloorId = event.target.value;
    setSelectedFloor(selectedFloorId);
    fetchApartmentByFloor(selectedFloorId);
  };

  return (
    <div className="container">
      <h5 className="mb-4">Căn hộ của bạn</h5>
      <div className="right-bar_house add-apartment">
        <p style={{ fontWeight: "bold" }}>
          Thêm căn hộ tại Vinhomes Grand Park
        </p>
        <div style={{ width: "80%" }}>
          <div className="building mb-3">
            <p>Chọn toà nhà:</p>
            <select
              className="form-select"
              name=""
              id=""
              onChange={handleBuildingChange}
              value={selectedBuilding}
            >
              <option value="" disabled>
                Chọn toà nhà
              </option>
              {buildings.map((building) => (
                <option key={building.id} value={building.id}>
                  {building.name}
                </option>
              ))}
            </select>
          </div>
          <div className="floor mb-3">
            <p>Chọn tầng:</p>
            <select
              className="form-select"
              name=""
              id=""
              onChange={handleFloorChange}
              value={selectedFloor}
            >
              <option value="">Chọn tầng</option>
              {floors.map((floor) => (
                <option key={floor.id} value={floor.id}>
                  {floor.no}
                </option>
              ))}
            </select>
          </div>
          <div className="apartment mb-3">
            <p>Chọn căn hộ:</p>
            <select className="form-select" name="" id="">
              {apartments.map((apartment) => (
                <option key={apartment.id} value={apartment.id}>
                  {apartment.roomNo}
                </option>
              ))}
            </select>
          </div>
          <div className="apartment-info mb-3">
            <p style={{ fontWeight: "bold" }}>Thông tin căn hộ</p>
            <table>
              <tr>
                <th>Địa chỉ:</th>
                <td>Số 3001 - Tòa {} - Vinhomes Grand Park</td>
              </tr>
              <tr>
                <th>Loại phòng:</th>
                <td>1phòng ngủ</td>
              </tr>
            </table>
          </div>
          <div className="add-btn">
            <button>Thêm căn hộ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddHouse;
