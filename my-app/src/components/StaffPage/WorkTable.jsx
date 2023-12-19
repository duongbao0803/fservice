import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Modal from "../Modal/Modal";
import config from "../../utils/cus-axios";
import { formatDate } from "../../utils/tools";
import {
  getApartmentId,
  getStaffWork,
  getStaffWorkPaging,
} from "../../services/UserService";
import { useNavigate } from "react-router-dom";

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
  const [status, setStatus] = useState("");
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const navigate = useNavigate();

  const columns = [
    { field: "stt", headerName: "STT", width: 50 },
    { field: "apartment", headerName: "Căn hộ", width: 110 },
    { field: "service", headerName: "Dịch vụ", width: 200 },
    { field: "customer", headerName: "Khách hàng", width: 200 },
    { field: "phoneNumber", headerName: "Số điện thoại", width: 120 },
    { field: "performDate", headerName: "Ngày thực hiện", width: 250 },
    {
      field: "status",
      headerName: "Trạng thái",
      width: 140,
      renderCell: (params) => (
        <div
          style={{
            color: "#fff",
            fontWeight: "500",
            fontSize: "14px",
            backgroundColor: getBackgroundStatusColor(params.value),
            minWidth: "120px",
            textAlign: "center",
            padding: "3px",
            borderRadius: "5px",
          }}
        >
          {getStatus(params.value)}
        </div>
      ),
    },
    {
      field: "feedback",
      headerName: "Đánh giá",
      width: 100,
      renderCell: (params) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flex: "auto",
          }}
        >
          {params.value === null ? (
            <i class="fa-solid fa-spinner" style={{ color: "#9AA14B" }}></i>
          ) : params.value === true ? (
            <i className="fa-solid fa-check" style={{ color: "#03AC00" }} />
          ) : (
            <i class="fa-solid fa-xmark" style={{ color: "#952323" }}></i>
          )}
        </div>
      ),
    },
    // { field: "feedback", headerName: "Đánh giá", width: 200 },
  ];

  const getStatus = (status) => {
    switch (status.trim()) {
      case "Pending":
        return "Đang chờ";
      case "Completed":
        return "Hoàn thành";
      case "Working":
        return "Làm việc";
      default:
        return "Đã hủy";
    }
  };

  // const getStatusColor = (status) => {
  //   switch (status.trim()) {
  //     case 'Pending':
  //       return 'black';
  //     case 'Completed':
  //       return 'green';
  //     case 'Working':
  //       return 'orange';
  //     default:
  //       return 'red';
  //   }
  // };

  const getBackgroundStatusColor = (status) => {
    switch (status.trim()) {
      case "Pending":
        return "#9aa14b";
      case "Completed":
        return "#03ac00";
      case "Working":
        return "#0a6ebd";
      default:
        return "#952323";
    }
  };

  useEffect(() => {
    fetchStaff(1);
  }, []);

  useEffect(() => {
    const fetchAllApartmentsAndCreateRows = async (page) => {
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
            feedback: staff.isConfirm,
          };
        })
      );
      setRows(rowsWithData);
      setLoading(false);
    };

    fetchAllApartmentsAndCreateRows();
  }, [staffData, config, formatDate]);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  const fetchStaff = async (pageNum) => {
    try {
      const res = await getStaffWorkPaging(username, pageNum);

      if (res && res.status === 200) {
        const xPaginationHeader = res.headers?.["x-pagination"];
        if (xPaginationHeader) {
          const paginationData = JSON.parse(xPaginationHeader);
          const sumPage = paginationData.TotalPages;
          const totalCount = paginationData.TotalCount;
          setTotalCount(totalCount);
          setTotalPage(sumPage);
        }
        setStaffData(res.data);
      } else {
        setStaffData([]);
      }
    } catch (Error) {
      console.log("error fetching: ", Error);
    }
  };

  const fetchStaffInfo = () => {
    fetchStaff();
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

  const handleRowClick = async (params) => {
    setSelectedService(params.row.id);

    const selectedStaff = staffData.find((staff) => staff.id === params.row.id);
    if (selectedStaff) {
      const apartmentInfo = await fetchApartment(
        selectedStaff.apartmentPackage.apartmentId
      );
      setBuilding(apartmentInfo?.type.building.name);
      setRoomNo(apartmentInfo?.roomNo);

      navigate(`/staff/work/${params.row.id}`, {
        state: {
          staffData,
          selectedService: params.row.id,
          info: selectedStaff,
          building: apartmentInfo?.type.building.name,
          roomNo: apartmentInfo?.roomNo,
          // fetchStaff: fetchStaffInfo,
        },
      });
    } else {
      console.error("No staff found for id:", params.row.id);
    }
  };

  return (
    <div className="staff-container mt-5">
      <div className="data-table">
        <div>
          <h5>Danh sách công việc</h5>
          {/* <div
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
          </div> */}
          <div
            className="content-table mt-4"
            style={{ height: 500, width: "100%" }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              pagination
              rowCount={totalCount}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              onRowClick={handleRowClick}
              sx={{ minHeight: "70vh" }}
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
