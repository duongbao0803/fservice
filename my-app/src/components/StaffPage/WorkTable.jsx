import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Modal from '../Modal/Modal'

function DataTable() {
  const [selectedValue, setSelectedValue] = useState('Theo ngày / tuần / tháng');
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState(null);
  const columns = [
    { field: 'stt', headerName: 'STT', width: 90 },
    { field: 'apartment', headerName: 'Căn hộ', width: 150 },
    { field: 'service', headerName: 'Dịch vụ', width: 250 },
    { field: 'customer', headerName: 'Khách hàng', width: 200 },
    { field: 'phoneNumber', headerName: 'Số điện thoại', width: 200 },
    { field: 'creationDate', headerName: 'Ngày hoàn thành', width: 200 }
  ];

  const rows = [
    { id: 1, stt: 1, apartment: 'S101-0904', service: 'Vệ sinh nhà cửa, bàn ghế', customer: 'Dương Tôn Bảo', phoneNumber: '0989899999', creationDate: '10/10/2023 8:00-10:00' },
    { id: 2, stt: 2, apartment: 'S101-0904', service: 'Vệ sinh nhà cửa, bàn ghế', customer: 'Dương Tôn Bảo', phoneNumber: '0989899999', creationDate: '10/10/2023 13:00-15:00' },
    { id: 3, stt: 3, apartment: 'S101-0904', service: 'Vệ sinh nhà cửa, bàn ghế', customer: 'Dương Tôn Bảo', phoneNumber: '0989899999', creationDate: '10/10/2023 15:00-17:00' },
  ];

  const handleRowClick = (params) => {
    setSelectedService(params.row.service);
    setModalOpen(true);

  }


  return (
    <div className="data-table mt-5" >
      <div>
        <div>
          <h4>DANH SÁCH CÔNG VIỆC</h4>
          <div className="dropdown-container d-flex align-items-center" style={{ justifyContent: 'flex-end' }}>
            <label className="mr-2">Hiển thị:</label>
            <select className="form-control w-auto" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
              <option>Theo ngày / tuần / tháng</option>
              <option>Theo ngày</option>
              <option>Theo tuần</option>
              <option>Theo tháng</option>
            </select>
          </div>
          <div className="content-table mt-4" style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              hideFooterSelectedRowCount
              rowsPerPageOptions={[5, 10]}
              onRowClick={handleRowClick}
              sx={{ cursor: 'pointer' }}
            />
          </div>

          {/* Modal */}
          {isModalOpen && (
            <Modal isOpen={isModalOpen} service={selectedService} onClose={() => setModalOpen(false)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default DataTable;
