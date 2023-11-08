import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import config from "../../utils/cus-axios";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import formatDate from "../../utils/tools";
import { getApartmentId, getApartmentPackageDetail } from "../../services/UserService";

function createData(serviceName, quantity, used, remaining, action) {
  return { serviceName, quantity, used, remaining, action };
}

function Rightbar({ id }) {

  const [currentApartment, setCurrentApartment] = useState({});
  const [apmPackage, setApmPackage] = useState({});
  const [apmPackageService, setApmPackageService] = useState([]);
  const [currentPackage, setcurrentPackage] = useState({});

  const apartmentPackage = async () => {
    try {
      // const res = await getApartmentPackageDetail(id);
      const res = await config.get(`/api/apartment-packages/${id}`);
      console.log("check apm package", res);
      if (res && res.data) {
        setApmPackage(res.data);
        setApmPackageService(res.data.apartmentPackageServices);
        setcurrentPackage(res.data.package);
        console.log("check package ne", res.data);
      }
      if (res.data.apartmentId !== undefined && res.status === 200) {
        console.log("check package amp", res.data.apartmentId);
        // let resApartment = await getApartmentId(res.data.apartmentId);
        let resApartment = await config.get(`/api/apartments/${res.data.apartmentId}`);
        if (resApartment && resApartment.data && resApartment.status === 200) {
          setCurrentApartment(resApartment.data);
        }
      }

    } catch (error) {
      console.log(error);
    }
  };

  const apartmentInfo = async (apartmentId) => {
    try {
      let res = await getApartmentId(apartmentId);
      if (res && res.data && res.status === 200) {
        setCurrentApartment(res.data);
        // currentApartment = res.data;
      }
    }
    catch (error) {
      console.log("fetching error", error);
    }
  };

  console.log("check data phat cuoi:", currentApartment);


  const rows = apmPackageService.map((apmPackage) => {
    const status = apmPackage.remainQuantity !== 0 ? "Sử dụng" : "Mua thêm";

    return createData(
      apmPackage.service.name,
      apmPackage.quantity,
      apmPackage.usedQuantity,
      apmPackage.remainQuantity,
      status
    );
  });

  return (
    <div className="right-bar-details mb-5">
      <h5 className="mb-4">Gói dịch vụ của căn hộ</h5>
      <div className="right_bar-details-main" style={{ padding: "20px" }}>
        {currentApartment !== null && currentApartment !== undefined && currentApartment.roomNo ?
          (
            <div className="chooseHouse-details pb-3">

              <div className="choose">
                <a href style={{ borderBottom: "3px solid #ff8228" }}>
                  {currentApartment.roomNo} - {currentApartment.type.building.name}
                  {/* {roomNo} - {buildingName} */}
                </a>
              </div>
              <div className="orderedPackage-details">
                <div className="orderedPackage-details_main d-flex justify-content-between">
                  <div className="orderedPackage-details-name ">
                    <span>{currentPackage.name}</span>
                  </div>
                  <div className="orderedPackage-details-status">
                    {apmPackage.packageStatus === "Active" ? (
                      <span className="box-status box-status__active">
                        ĐANG HOẠT ĐỘNG
                      </span>
                    ) : (
                      <span className="box-status box-status__expired">
                        ĐÃ HẾT HẠN
                      </span>
                    )}
                  </div>
                </div>
                <div className="info-ordered-details">
                  <table className="info_ordered-details-table">
                    <tbody>
                      <tr />
                      <tr />
                      <tr>
                        <td>Căn hộ:</td>
                        <td>
                          {currentApartment.roomNo} - {currentApartment.type.building.name} - Vinhomes Grand Parks
                          {/* {roomNo} - {buildingName} - Vinhomes Grand Park */}
                        </td>
                      </tr>

                      <tr>
                        <td>Áp dụng từ:</td>
                        <td>
                          {formatDate(apmPackage.startDate)} -{" "}
                          {formatDate(apmPackage.endDate)}
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="choose-details_table">
                    <tr>
                      <td>
                        <span style={{ borderBottom: "3px solid #ff8228" }}>
                          Dịch vụ
                        </span>
                      </td>
                      <td>
                        <span> Sử dụng</span>
                      </td>
                    </tr>
                  </div>
                  <TableContainer component={Paper} style={{ boxShadow: "none" }}>
                    <Table
                      sx={{
                        minWidth: 650,

                        "& .MuiTableCell-root": {
                          borderBottom: "none",
                          backgroundColor: "transparent",
                        },
                        "& .MuiTableHead-root .MuiTableCell-root": {
                          borderBottom: "none",
                          backgroundColor: "transparent",
                        },
                        borderCollapse: "separate",
                        borderSpacing: "0",
                      }}
                      size="small"
                      aria-label="a dense table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell>Tên dịch vụ</TableCell>
                          <TableCell align="right">Số lượng</TableCell>
                          <TableCell align="right">Đã dùng</TableCell>
                          <TableCell align="right">Còn lại</TableCell>
                          <TableCell align="right">Thao tác</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow key={row.serviceName}>
                            <TableCell component="th" scope="row">
                              {row.serviceName}
                            </TableCell>
                            <TableCell align="right">{row.quantity}</TableCell>
                            <TableCell align="right">{row.used}</TableCell>
                            <TableCell align="right">{row.remaining}</TableCell>
                            {apmPackage.packageStatus === "Active" ? (
                              <TableCell align="right" className="action">
                                {row.action}
                              </TableCell>
                            ) : (
                              <span></span>
                            )}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
                <div
                  className="button-details d-flex justify-content-end"
                  style={{ marginTop: "10px" }}
                >
                  <button>
                    <Link to="/user/manage-package">Quay về</Link>
                  </button>
                </div>
              </div>
            </div>

          )
          :
          ("DỊCH VỤ KHÔNG KHẢ DỤNG.")
        }
      </div>
    </div>
  );


}

export default Rightbar;
