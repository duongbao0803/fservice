import React, { useEffect, useState } from "react";
import {
  getApartmentId,
  getApartmentPackageDetail,
} from "../../services/UserService";
import { formatDate } from "../../utils/tools";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Spinner } from "react-bootstrap";
import UsingModal from "../UsingModal/UsingModal";
import Rightbar_Use from "../ManagePackage_Use/Rightbar_Use";
import ManagePackage_Use from "../../page/ManagePackage_Use";

function createData(serviceName, quantity, used, remaining, action) {
  return { serviceName, quantity, used, remaining, action };
}

function Rightbar({ id }) {
  const [data, setData] = useState(null);
  const [apartmentId, setApartmentId] = useState(null);
  const [apartment, setApartment] = useState(null);
  const [selectedServiceId, setSelectedServiceId] = useState("");
  const [selectedServiceName, setSelectedServiceName] = useState("");
  const [isShowUsing, setIsShowUsing] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getApartmentPackageDetail(id);
        setData(response.data);
        setApartmentId(response.data.apartmentId);
      } catch (err) {
        setData(null);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getApartmentId(apartmentId);
        setApartment(response.data);
      } catch (erro) {
        setApartment(null);
      }
    };
    getData();
  }, [apartmentId]);

  const rows = data?.apartmentPackageServices?.map((apmPackage) => {
    const status = apmPackage.remainQuantity !== 0 ? "Sử dụng" : "Mua thêm";
    return createData(
      apmPackage.service.name,
      apmPackage.quantity,
      apmPackage.usedQuantity,
      apmPackage.remainQuantity,
      status
    );
  });

  const [show, setShow] = useState(false);

  const handleClick = (item, index, serviceId, serviceName) => {
    setShow(true);
    setSelectedServiceId(serviceId);
    setSelectedServiceName(serviceName);
  };

  const handleUsing = (status) => {
    if (status) {
      setIsShowUsing(true);
      const use = document.getElementById("use");
      use.style.borderBottom = "3px solid #ff8228";
      const service = document.getElementById("service");
      service.style.border = "none";
    } else {
      setIsShowUsing(false);
      const use = document.getElementById("use");
      use.style.border = "none";
      const service = document.getElementById("service");
      service.style.borderBottom = "3px solid #ff8228";
    }
  };

  return (
    <>
      <div className="right-bar-details mb-5">
        <h5 className="mb-4">Gói dịch vụ của căn hộ</h5>
        <div className="right_bar-details-main" style={{ padding: "20px" }}>
          {data && apartment ? (
            <div className="chooseHouse-details pb-3">
              <div className="choose">
                <a href style={{ borderBottom: "3px solid #ff8228" }}>
                  {apartment?.roomNo} - {apartment?.type?.building?.name}
                </a>
              </div>
              <div className="orderedPackage-details">
                <div className="orderedPackage-details_main d-flex justify-content-between">
                  <div className="orderedPackage-details-name ">
                    <span>
                      {data?.package?.name} - Dành cho căn{" "}
                      {apartment?.type.type}
                    </span>
                  </div>
                  <div className="orderedPackage-details-status">
                    {data?.packageStatus === "Active" ? (
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
                          {apartment?.roomNo} -{" "}
                          {apartment?.type?.building?.name} - Vinhomes Grand
                          Parks
                        </td>
                      </tr>

                      <tr>
                        <td>Áp dụng từ:</td>
                        <td>
                          {formatDate(data.startDate)} -{" "}
                          {formatDate(data.endDate)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="choose-details_table">
                    <tr>
                      <td onClick={() => handleUsing(false)}>
                        <span
                          id="service"
                          style={{ borderBottom: "3px solid #ff8228" }}
                        >
                          Dịch vụ
                        </span>
                      </td>
                      <td onClick={() => handleUsing(true)}>
                        <span id="use"> Sử dụng</span>
                      </td>
                    </tr>
                    {isShowUsing === true ? <Rightbar_Use /> : ""}
                  </div>

                  {isShowUsing === false ? (
                    <TableContainer
                      component={Paper}
                      style={{ boxShadow: "none" }}
                    >
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
                          {rows.map((row, index) => (
                            <TableRow key={row.serviceName}>
                              <TableCell component="th" scope="row">
                                {row.serviceName}
                              </TableCell>
                              <TableCell align="right">
                                {row.quantity}
                              </TableCell>
                              <TableCell align="right">{row.used}</TableCell>
                              <TableCell align="right">
                                {row.remaining}
                              </TableCell>
                              {data.packageStatus === "Active" ? (
                                <TableCell
                                  align="right"
                                  className="action"
                                  onClick={() =>
                                    handleClick(
                                      row.action,
                                      index,
                                      data.apartmentPackageServices[index]
                                        .serviceId,
                                      data?.apartmentPackageServices[index]
                                        ?.service?.name
                                    )
                                  }
                                >
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
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="text-center">
                <Spinner
                  animation="border"
                  variant="primary"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
            </div>
          )}
        </div>
        <UsingModal
          handleClose={() => setShow(false)}
          show={show}
          selectedServiceId={selectedServiceId}
          id={id}
          selectedServiceName={selectedServiceName}
          apartment={apartment}
        />
      </div>
    </>
  );
}

export default Rightbar;
