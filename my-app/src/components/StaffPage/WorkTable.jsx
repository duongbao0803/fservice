import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Modal from "../Modal/Modal";
import config from "../../utils/cus-axios";
import { formatDate } from "../../utils/tools";
import { getApartmentId, getStaffWork } from "../../services/UserService";

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
  const [building, setBuilding] = useState({});
  const [roomNo, setRoomNo] = useState({});
  const [status, setStatus] = useState(""); // Add status state

  const columns = [
    { field: "stt", headerName: "STT", width: 80 },
    { field: "apartment", headerName: "Căn hộ", width: 150 },
    { field: "service", headerName: "Dịch vụ", width: 250 },
    { field: "customer", headerName: "Khách hàng", width: 200 },
    { field: "phoneNumber", headerName: "Số điện thoại", width: 150 },
    { field: "performDate", headerName: "Ngày thực hiện", width: 240 },
    { field: "status", headerName: "Trạng thái", width: 120 },
  ];

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
          setBuilding(apartmentInfo?.type.building.name);
          setRoomNo(apartmentInfo?.roomNo);
          // Construct the row
          return {
            id: staff.id,
            stt: index + 1,
            apartment:
              `${apartmentInfo?.type.building.name} - ${apartmentInfo?.roomNo} ` ||
              "N/A",
            service: staff.service.name,
            customer: staff.customerName,
            phoneNumber: staff.customerPhone,
            performDate: `${formatDate(staff.createdDate)} ${staff.shiftTime}`,
            status: staff.status,
          };
        })
      );
      setRows(rowsWithData);
      console.log("cehcek row", rows);
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

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  const fetchStaff = async () => {
    try {
      let response = await getStaffWork(username);
      console.log("check staff:", response.data);
      if (response && response.data && response.status === 200) {
        setStaffData(response.data);
      }
    } catch (Error) {
      console.log("error fetching: ", Error);
    }
  };
  const fetchApartment = async (id) => {
    try {
      const response = await getApartmentId(id);
      if (response && response.data && response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error("Error fetching apartment:", error);
      return null;
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
    setModalOpen(true);

    const selectedStaff = staffData.find((staff) => staff.id === params.row.id);
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
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              onRowClick={handleStaff}
            />
          </div>
          {/* Modal */}
          {isModalOpen && (
            <Modal
              staffData={staffData}
              isOpen={isModalOpen}
              service={selectedService}
              onClose={() => setModalOpen(false)}
              info={info}
              building={building}
              roomNo={roomNo}
              fetchStaff={() => fetchStaff()}
              handleStatusChange={handleStatusChange}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default DataTable;
