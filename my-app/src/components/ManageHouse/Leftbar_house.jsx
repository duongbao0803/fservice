import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Leftbar_house() {

  //   const [apiData, setApiData] = useState(null);

  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("https://fservices.azurewebsites.net/api/apartment-packages/1", {
  //           headers: {
  //               'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidXNlckBleGFtcGxlLmNvbSIsImp0aSI6ImUzZTY5MDRhLTUwY2UtNDQ5Ny1hNjZiLTQxNmQ1MzQxNGRhYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVTRVIiLCJleHAiOjE2OTg0MTg1MjksImlzcyI6Imh0dHBzOi8vZnNlcnZpY2VhcGl0ZXN0LmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiVXNlckZTZXJ2aWNlcyJ9.xbuie-Ls5bBHO6VeBCgGOs3lWVrZ8-zRGrIdssPy6oo`
  //           }
  //       });
  //       setApiData(response.data);
  //       alert(`Fetched data with ID: ${response.data.id}`);
  //   } catch (error) {
  //       console.error("Error fetching data:", error);
  //       console.error("Error response:", error.response);
  //   }
  //   }


  return (
    <div class="left-bar">
      <div class="main-info mb-4">
        <img src="./img/fb_logo.png" alt="" width="30px" />
        <span> duongbao2k3</span>
      </div>
      <div class="main_info-list">
        <div class="user info-buiding">
          <span
          ><i class="fa-solid fa-building"></i>&nbsp;&nbsp;Căn hộ của
            bạn</span
          >
        </div>
        <div class="user info-package">
          <span
          ><i class="fa-solid fa-box-archive"></i>&nbsp;&nbsp;Gói dịch
            vụ</span
          >
        </div>
        <div class="user info-order">
          <span
          ><i class="fa-regular fa-file"></i>&nbsp;&nbsp;Quản lí đơn
            hàng</span
          >
        </div>
        <div class="user info-account">
          <span class=""
          ><i class="fa-regular fa-user"></i>&nbsp;&nbsp;Thông tin tài
            khoản</span
          >
        </div>
        <div class="user logout">
          <span
          ><i class="fa-solid fa-arrow-right-from-bracket"></i
          >&nbsp;&nbsp;Thoát</span
          >
        </div>
      </div>
    </div>

  )
}

export default Leftbar_house;