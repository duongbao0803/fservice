import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Leftbar() {

  const [apiData, setApiData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fservices.azurewebsites.net/api/apartment-packages/1", {
          headers: {
              'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidXNlckBleGFtcGxlLmNvbSIsImp0aSI6ImUzZTY5MDRhLTUwY2UtNDQ5Ny1hNjZiLTQxNmQ1MzQxNGRhYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVTRVIiLCJleHAiOjE2OTg0MTg1MjksImlzcyI6Imh0dHBzOi8vZnNlcnZpY2VhcGl0ZXN0LmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiVXNlckZTZXJ2aWNlcyJ9.xbuie-Ls5bBHO6VeBCgGOs3lWVrZ8-zRGrIdssPy6oo`
          }
      });
      setApiData(response.data);
      alert(`Fetched data with ID: ${response.data.id}`);
  } catch (error) {
      console.error("Error fetching data:", error);
      console.error("Error response:", error.response);
  }
  }
  

    return (
      <div className="left-bar">
        <div className="main-info mb-4">
          <img src="./img/fb_logo.png" alt="" width="50px" />
          <span> duongbao2k3</span>
        </div>
        <div className="main_info-list">
          <div className="user info-buiding">
            <span>
              <i className="fa-solid fa-building" />
              &nbsp;&nbsp;Căn hộ của bạn
            </span>
          </div>
          <div className="user info-package">
            <span>
              <i className="fa-solid fa-box-archive" />
              &nbsp;&nbsp;Gói dịch vụ
            </span>
          </div>
          <div className="user info-order">
            <span>
              <i className="fa-regular fa-file" />
              &nbsp;&nbsp;Quản lí đơn hàng
            </span>
          </div>
          <div className="user info-account">
            <span className="">
              <i className="fa-regular fa-user" />
              &nbsp;&nbsp;Thông tin tài khoản
            </span>
          </div>
          <div className="user logout">
            <span>
              <i className="fa-solid fa-arrow-right-from-bracket" />
              &nbsp;&nbsp;Thoát
            </span>
          </div>
        </div>
      </div>

    )
}

export default Leftbar;