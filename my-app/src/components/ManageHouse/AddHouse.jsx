import React, { useState, useEffect } from "react";
import {
    getAddApartment,
    getApartmentByFloor,
    getBuilding,
    getFloor,
} from "../../services/UserService";
import config from "../../utils/cus-axios";

function AddHouse() {
    const [buildings, setBuildings] = useState([]);
    const [floors, setFloors] = useState([]);
    const [apartments, setApartments] = useState([]);
    const [apartmentTypes, setApartmentTypes] = useState([]);
    const [selectedBuilding, setSelectedBuilding] = useState("");
    const [selectedFloor, setSelectedFloor] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [selectedApartment, setSelectedApartment] = useState("");



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

    const fetchApartmentType = async (buildingId) => {
        try {
            const res = await config.get(`/api/types?buildingId=${buildingId}`);
            console.log("check type", res.data);
            if (res && res.status === 200) {
                setApartmentTypes(res.data);
            }
        }
        catch (error) {
            console.log("Error Fetching Apartment type", error);
        }
    };


    const fetchApartment = async (selectedFloor, selectedType) => {
        try {
            const res = await getAddApartment(selectedFloor, selectedType);
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
        fetchApartmentType(selectedBuildingId);
    };

    const handleFloorChange = (event) => {
        const selectedFloorId = event.target.value;
        setSelectedFloor(selectedFloorId);
        // fetchApartmentType(selectedFloorId);
        // fetchApartmentByFloor(selectedFloorId);
    };

    const handleTypeChange = (event) => {
        const selectedTypeId = event.target.value;
        console.log("check type select:", selectedTypeId);
        setSelectedType(selectedTypeId);
        console.log("Check select floor", selectedFloor);
        if (selectedTypeId && selectedFloor) {
            fetchApartment(selectedFloor, selectedType);
        }
    };

    const handleApartmentChange = (even) => {
        const selectedApartmentId = even.target.value;
        setSelectedApartment(selectedApartmentId);
    };




    return (
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
                            {apartments.map((apartment) => (
                                <option key={apartment.id} value={apartment.id}>
                                    {apartment.roomNo}
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
                            <td>Số {selectedApartment} - Tòa {selectedBuilding} - Vinhomes Grand Park</td>
                        </tr>
                        <tr>
                            <th>Loại phòng:</th>
                            <td>{selectedType}</td>
                        </tr>
                    </table>
                </div>
                <div className="button-container">
                    <div style={{ margin: "10px" }}>
                        <button className="btn-cancel">Huỷ</button>
                    </div>
                    <div style={{ margin: "10px" }}>
                        <button className="btn-add">Thêm căn hộ</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddHouse;
