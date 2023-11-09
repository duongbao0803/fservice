import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Modal from "../Modal/Modal";
import config from "../../utils/cus-axios";
import { formatDate } from "../../utils/tools";

function DataTable() {
  const [selectedValue, setSelectedValue] = useState(
    "Theo ngày / tuần / tháng"
  );
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState(null);
  const username = localStorage.getItem("username");
  const [staffData, setStaffData] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState({});

  const columns = [
    { field: "stt", headerName: "STT", width: 90 },
    { field: "apartment", headerName: "Căn hộ", width: 150 },
    { field: "service", headerName: "Dịch vụ", width: 250 },
    { field: "customer", headerName: "Khách hàng", width: 200 },
    { field: "phoneNumber", headerName: "Số điện thoại", width: 200 },
    { field: "performDate", headerName: "Ngày thực hiện", width: 250 },
  ];

  // const rows = [
  //   { id: 1, stt: 1, apartment: 'S101-0904', service: 'Vệ sinh nhà cửa, bàn ghế', customer: 'Dương Tôn Bảo', phoneNumber: '0989899999', creationDate: '10/10/2023 8:00-10:00' },
  //   { id: 2, stt: 2, apartment: 'S101-0904', service: 'Vệ sinh nhà cửa, bàn ghế', customer: 'Dương Tôn Bảo', phoneNumber: '0989899999', creationDate: '10/10/2023 13:00-15:00' },
  //   { id: 3, stt: 3, apartment: 'S101-0904', service: 'Vệ sinh nhà cửa, bàn ghế', customer: 'Dương Tôn Bảo', phoneNumber: '0989899999', creationDate: '10/10/2023 15:00-17:00' },
  // ];
  useEffect(() => {
    fetchStaff();
  }, []);

  useEffect(() => {
    const fetchAllApartmentsAndCreateRows = async () => {
      setLoading(true);
      const rowsWithData = await Promise.all(
        staffData?.map(async (staff, index) => {
          const apartmentInfo = await fetchApartment(
            staff.apartmentPackage.apartmentId
          );
          // Construct the row
          return {
            id: staff.id,
            stt: index + 1,
            apartment:
              `${apartmentInfo?.type.building.name} - ${apartmentInfo?.roomNo} ` ||
              "N/A", // Assuming you want the apartment name
            service: staff.service.name,
            customer: staff.customerName,
            phoneNumber: staff.customerPhone,
            performDate: `${formatDate(staff.createdDate)} ${staff.shiftTime}`,
          };
        })
      );
      setRows(rowsWithData);
      setLoading(false);
    };

    fetchAllApartmentsAndCreateRows();
  }, [staffData, config]);
  // Assuming 'staffData' is the state that holds the fetched data.
  // const rows = staffData.map((staff, index) => ({
  //   id: staff.id, // Make sure 'id' is unique
  //   stt: index + 1, // Sequential number, if needed
  //   apartment: staff.apartmentPackage.apartmentId,
  //   service: staff.service.name,
  //   customer: staff.customerName,
  //   phoneNumber: staff.customerPhone,
  //   performDate: `${formatDate (staff.createdDate)} ${staff.shiftTime}`,
  // }));

  const fetchStaff = async () => {
    try {
      let response = await config.get(`/api/staffworks/${username}`);
      console.log("check staff:", response.data);
      setStaffData(response.data);
    } catch (Error) {
      console.log("error fetching: ", Error);
    }
  };
  const fetchApartment = async (id) => {
    try {
      const response = await config.get(`/api/apartments/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching apartment:", error);
      return null; // Handle the error as needed
    }
  };

  // const handleRowClick = (params) => {
  //   setSelectedService(params.row.service);
  //   console.log("check params:", params.row.id);
  //   console.log("check params:", params.row.id);

  //   setModalOpen(true);

  // }

  const handleStaff = (params) => {
    setSelectedService(params.row.id);
    console.log("check params:", params.row.id);
    setModalOpen(true);

    const selectedStaff = staffData.find((staff) => staff.id === params.row.id);
    // console.log("check selectrd staff", selectedStaff);
    if (selectedStaff) {
      setInfo(selectedStaff);
    } else {
      console.error("No staff found for id:", params.row.id);
    }
  };

  return (
    <div className="data-table mt-5">
      <div>
        <div>
          <h4>DANH SÁCH CÔNG VIỆC</h4>
          <div
            className="dropdown-container d-flex align-items-center"
            style={{ justifyContent: "flex-end" }}
          >
            <label style={{ paddingRight: "10px", margin: "0" }}>
              Hiển thị:
            </label>
            <select
              className="form-control w-auto"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
            >
              <option>Mặc định</option>
              <option>Theo ngày</option>
              <option>Theo tuần</option>
              <option>Theo tháng</option>
            </select>
          </div>
          <div
            className="content-table mt-4"
            style={{ height: 500, width: "100%" }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              hideFooterSelectedRowCount
              rowsPerPageOptions={[5, 10]}
              // onRowClick={handleRowClick}
              onRowClick={handleStaff}
              sx={{ cursor: "pointer" }}
            />
          </div>

          {/* Modal */}
          {isModalOpen && (
            <Modal
              staffData={staffData}
              isOpen={isModalOpen}
              service={selectedService}
              onClose={() => setModalOpen(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default DataTable;
