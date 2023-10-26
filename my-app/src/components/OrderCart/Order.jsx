import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import PriceFormat from "../PackageDetails/PriceFormat";
import "../../assets/css/styleOrder.css";
import { launch } from "../../services/UserService";

const Order = () => {
  const [yourRoom, setYourRoom] = useState([]);
  const [yourTower, setYourTower] = useState([]);
  const [typeRoom, setTypeRoom] = useState([]);
  const [typeId, setTypeId] = useState([]);
  const [price, setPrice] = useState(0);

  const [loading, setLoading] = useState(true);
  const { packageName, id } = useParams();
  const [TypeRoomForSelectedHouse, setTypeRoomForSelectedHouse] = useState("");
  const [BuildingForSelectedHouse, setBuildingForSelectedHouse] = useState("");

  const [TypeIDForSelectedHouse, setTypeIDForSelectedHouse] = useState("");
  const instead = "0";
  const username = localStorage.getItem("username");

  useEffect(() => {
    fetchHouse();
  }, []);

  const fetchHouse = async () => {
    try {
      const res = await axios.get(
        `https://fservices.azurewebsites.net/api/apartments?username=${username}`
      );
      console.log("check typeID", res.data);
      const typeIdArray = res.data.map((apartment) => apartment.typeId);
      console.log("check array type id", typeIdArray);
      setTypeId(typeIdArray);

      const yourRoomArray = res.data.map((apartment) => apartment.roomNo);
      console.log("check setYourRoom", yourRoomArray);

      const yourTowerArray = res.data.map(
        (apartment) => apartment.type.building.name
      );
      console.log("check yourTowerArray", yourTowerArray);

      const typeRoomArray = res.data.map((apartment) => apartment.type.type);
      console.log("check typeRoomArray", typeRoomArray);

      setYourRoom(yourRoomArray);
      setYourTower(yourTowerArray);
      setTypeRoom(typeRoomArray);
    } catch (error) {
      console.error("Error fetching package:", error);
      setLoading(false);
    }
  };

  const [selectedHouseChange, setSelectedHouseChange] = useState([]);

  const handleHouseChange = (event) => {
    try {
      const selectedHouse = event.target.value;
      setSelectedHouseChange(selectedHouse);

      if (selectedHouse) {
        const roomType = typeRoom[yourRoom.indexOf(selectedHouse)];
        setTypeRoomForSelectedHouse(roomType);

        // const buildingType = yourTower[yourRoom.indexOf(selectedHouse)];
        // console.log("check building", buildingType);
        // setBuildingForSelectedHouse()
        // setTypeRoomForSelectedHouse(buildingType);

        const selectedTypeId = typeId[yourRoom.indexOf(selectedHouse)];
        console.log("chec selectedTypeId", selectedTypeId);
        setTypeIDForSelectedHouse(selectedTypeId);

        fetchPrice(selectedTypeId);
      } else {
        setPrice(0);
        setTypeRoomForSelectedHouse("");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const fetchPrice = async (selectedTypeId) => {
    try {
      const getPrice = await axios.get(
        `https://fservices.azurewebsites.net/api/packages/${id}?typeId=${selectedTypeId}`
      );
      console.log("check Priceeee", getPrice.data);
      setPrice(getPrice.data.packagePrices[0].price);
    } catch (error) {
      console.error("Error fetching package:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container mb-5 mt-4">
        <div className="row">
          <div className="col-md-12">
            <div className="location">
              <i className="fa-solid fa-house" style={{ color: "#ff8228" }} />
              &nbsp;<h5 className="d-inline">Trang chủ</h5>&nbsp;&nbsp;&nbsp;
              <i
                className="fa-solid fa-caret-right"
                style={{ color: "#ff8228" }}
              ></i>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <h5 className="d-inline">Xác nhận dịch vụ</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <div className="form-content text-center">
          <span>ĐƠN HÀNG</span>
        </div>
        <div className="main-form">
          <div className="row">
            <div className="col-md-6">
              <div className="work-info">
                <div className="content work_info-title">
                  <span>
                    <strong>THÔNG TIN LÀM VIỆC</strong>
                  </span>
                </div>
                <div className="work_info-test">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Nơi làm việc
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Nơi làm việc"
                      value="Vinhomes Grand Park"
                      readOnly
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label col-lg-12 col-md-12 col-12 col-sm-12"
                      style={{ padding: 0 }}
                    >
                      Số nhà / Căn hộ
                    </label>
                    <select
                      className="form-select form-select-lg mb-3 col-lg-12 cols-md-12"
                      aria-label=".form-select-lg example"
                      value={selectedHouseChange}
                      onChange={handleHouseChange}
                    >
                      <option value="">Chọn nhà / căn hộ</option>
                      {yourRoom.map((room, index) => (
                        <option key={index} value={room}>
                          {`${room} - ${yourTower[index]}`}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="service-info mb-4">
                <div className="content service_info-title">
                  <span>
                    <strong>THÔNG TIN DỊCH VỤ</strong>
                  </span>
                </div>
                <div className="service_info-test">
                  <div className="row">
                    <div className="col-sm-6 col-md-4 col-4">
                      <span>Gói dịch vụ:</span>
                      <span>Thời hạn:</span>
                      <span>Loại phòng:</span>
                      <span>Giá tiền:</span>
                    </div>

                    <div className="col-sm-6 col-md-8 col-8">
                      <span>{packageName}</span>
                      <span>4 tuần (kể từ ngày đặt)</span>
                      <span>{TypeRoomForSelectedHouse || instead}</span>
                      <span>
                        <PriceFormat price={price} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-info">
                <div className="content contact_info-title">
                  <span>
                    <strong>THÔNG TIN LIÊN HỆ</strong>
                  </span>
                </div>
                <div className="contact_info-test">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Họ và tên người liên hệ
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Họ và tên"
                    />
                  </div>
                  <div className="work-date">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                          >
                            Số điện thoại
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="0909 113 114"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="example@email.com"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="payment-info">
                <div className="content payment_info-title">
                  <span>
                    <strong>THÔNG TIN THANH TOÁN</strong>
                  </span>
                </div>
                <div className="payment_info-test ">
                  <strong>Tổng tiền: </strong>
                  <span style={{ color: "#ff8228" }}>
                    <strong>
                      <PriceFormat price={price} />{" "}
                    </strong>
                  </span>
                  <p>
                    <strong>Chọn phương thức thanh toán</strong>
                  </p>
                  <div className="pay-by-cash">
                    <input type="radio" />
                    <img
                      src={require("../../assets/img/logoVNPAY_thanhtoan.png")}
                      alt=""
                      width="40px"
                    />
                    <span>Thanh toán bằng VNPAY</span>
                  </div>
                  <div className="confirm">
                    <input type="checkbox" />
                    <span>
                      Nhấn "Xác nhận" đồng nghĩa với việc bạn đã đồng ý với điều
                      khoản dịch vụ của{" "}
                      <span style={{ fontWeight: "900" }}>FService</span>
                    </span>
                  </div>
                  <div className="order-confirm">
                    <button type="submit">Hủy đơn</button>
                    <button type="submit">
                      <Link
                        to="/confirm"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Xác nhận
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="line" />
        </div>
      </div>
    </>
  );
};

export default Order;
