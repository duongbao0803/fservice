import React, { useState, useEffect } from "react";
import {
  createApartment,
  getAddApartment,
  getApartmentByFloor,
  getApartmentInfo,
  getApartmentType,
  getBuilding,
  getFloor,
} from "../../services/UserService";
import { toast } from "react-toastify";

function AddHouse({ isShowAdd, handleClose }) {
  const [buildings, setBuildings] = useState([]);
  const [floors, setFloors] = useState([]);
  const [apartments, setApartments] = useState([]);
  const [apartmentTypes, setApartmentTypes] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState("");
  const [selectedFloor, setSelectedFloor] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedApartment, setSelectedApartment] = useState("");
  const [selectedApartmentInfo, setSelectedApartmentInfo] = useState({});

  useEffect(() => {
    fetchBuilding();
  }, []);

  const fetchBuilding = async () => {
    try {
      const res = await getBuilding();
      if (res && res.status === 200) {
        setBuildings(res.data);
      } else {
        setBuildings([]);
      }
    } catch (error) {
      console.log("Error Fetching Buildings", error);
    }
  };

  const fetchFloor = async (buildingId) => {
    try {
      const res = await getFloor(buildingId);
      if (res && res.status === 200) {
        setFloors(res.data);
      } else {
        setFloors([]);
      }
    } catch (error) {
      console.log("Error Fetching Floors", error);
    }
  };
  const fetchApartmentType = async (buildingId) => {
    try {
      const res = await getApartmentType(buildingId);
      if (res && res.status === 200) {
        setApartmentTypes(res.data);
      } else {
        setApartmentTypes([]);
      }
    } catch (error) {
      console.log("Error Fetching Apartment type", error);
    }
  };

  const fetchApartment = async (selectedFloor, selectedType) => {
    try {
      const res = await getAddApartment(selectedFloor, selectedType);
      if (res && res.status === 200) {
        setApartments(res.data);
      } else {
        setApartments([]);
      }
    } catch (error) {
      console.log("Error Fetching Apartments", error);
    }
  };

  const fetchApartmentInfo = async (apartmentId) => {
    try {
      const res = await getApartmentInfo(apartmentId);
      if (res && res.status === 200) {
        setSelectedApartmentInfo(res.data);
      } else {
        setSelectedApartmentInfo({});
      }
    } catch (error) {
      console.log("Error Fetching Apartments", error);
    }
  };

  const handleBuildingChange = async (event) => {
    const selectedBuildingId = event.target.value;
    setSelectedBuilding(selectedBuildingId);
    await fetchFloor(selectedBuildingId);
    await fetchApartmentType(selectedBuildingId);
  };

  const handleFloorChange = async (event) => {
    const selectedFloorId = event.target.value;
    setSelectedFloor(selectedFloorId);
    setSelectedApartment("");
    if (selectedType) {
      await fetchApartment(selectedFloorId, selectedType);
    } else {
      setApartments([]);
    }
  };

  const handleTypeChange = async (event) => {
    const selectedTypeId = event.target.value;
    setSelectedType(selectedTypeId);
    setSelectedApartment("");
    if (selectedFloor) {
      await fetchApartment(selectedFloor, selectedTypeId);
    } else {
      setApartments([]);
    }
  };

  const handleApartmentChange = (e) => {
    const selectedApartmentId = e.target.value;
    setSelectedApartment(selectedApartmentId);
    if (selectedApartmentId) {
      fetchApartmentInfo(selectedApartmentId);
    }
  };

  const handleCreate = async () => {
    try {
      const res = await createApartment(
        selectedApartment,
        localStorage.getItem("username")
      );
      if (res && res.status === 200) {
        toast.success("Đăng kí căn hộ thành công");
        handleClose();
      } else if (res.status === 404) {
        toast.error("Căn hộ đã có người đăng ký. Vui lòng đăng kí căn hộ khác");
      } else if (res.status === 405) {
        toast.error("Vui lòng chọn đầy đủ thông tin để đăng kí căn hộ");
      } else {
        toast.error("Đăng kí căn hộ thất bại");
      }
    } catch (error) {
      console.log("Error Creating Apartment", error);
    }
  };

  return (
    <div className="right-bar_house add-apartment">
      <p style={{ fontWeight: "bold" }}>Thêm căn hộ tại Vinhomes Grand Park</p>
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
            <option value="">Chọn toà nhà</option>
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
        <div className="row">
          <div className="col-md-6 apartment-type mb-3">
            <p>Chọn loại căn hộ:</p>

            <select
              className="form-select"
              name=""
              id=""
              onChange={handleTypeChange}
              value={selectedType}
            >
              <option value="">Chọn loại căn hộ</option>
              {apartmentTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.type}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6 apartment mb-3">
            <p>Chọn căn hộ:</p>
            <select
              className="form-select"
              name=""
              id=""
              onChange={handleApartmentChange}
            >
              <option value="">Chọn căn hộ</option>
              {apartments?.map((apartment) => (
                <option key={apartment?.id} value={apartment?.id}>
                  {apartment?.roomNo}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="apartment-info mb-3">
          <p style={{ fontWeight: "bold" }}>Thông tin căn hộ</p>
          <table>
            <tr>
              <th>Địa chỉ:</th>
              <td>
                Tòa {selectedApartmentInfo?.type?.building?.name} - Vinhomes
                Grand Park - Số phòng {selectedApartmentInfo?.roomNo}
              </td>
            </tr>
            <tr>
              <th>Loại phòng:</th>
              <td>{selectedApartmentInfo?.type?.type}</td>
            </tr>
          </table>
        </div>
        <div className="button-container">
          <div className="d-flex " style={{ margin: "10px" }}>
            <button className="btn-cancel" onClick={handleClose}>
              Huỷ
            </button>
          </div>
          <div style={{ margin: "10px" }}>
            <button className="btn-add" onClick={handleCreate}>
              Thêm căn hộ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddHouse;
