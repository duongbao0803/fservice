import React from 'react';
import { useState } from 'react';
import Modal from '../Modal/Modal';


function ServiceTable() {
  const [selectedValue, setSelectedValue] = useState("Theo ngày / tuần / tháng");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState(null);
  const data = [
    { no: '1', apartment: 'S101-0904', service: 'Vệ sinh nhà cửa, bàn ghế', customer: 'Dương Tôn Bảo', phoneNumber: '0989999999', createdAt: '10/10/2023 8:00AM-10:00AM' },
    { no: '2', apartment: 'S102-0309', service: 'Giặt quần áo', customer: 'Phạm Ngọc Bảo', phoneNumber: '0989999999', createdAt: '10/10/2023 9:00AM-11:00AM' },
    { no: '3', apartment: 'S103-2008', service: 'Vệ sinh máy lạnh', customer: 'Đặng Gia Đức', phoneNumber: '0989999999', createdAt: '10/10/2023 15:00PM-17:00PM' },
  ];
 
  const styles = {

    container: {
      marginLeft: '350px',
      marginRight: '90px',
      marginTop: '20px',
      border: '1px solid #ddd',       
      borderRadius: '5px',             
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',   
      padding: '20px',                
      backgroundColor: '#ffffff',
      maxWidth: '100%',
      height: '600px'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      border: '1px solid #ddd',
      height: '250px'

    },
    header: {
      backgroundColor: '#f5f5f5',
      borderBottom: '2px solid #ddd'
    },
    row: {
      borderBottom: '1px solid #ddd'
    },
    cell: {
      padding: '5px',  
      textAlign: 'left'
      
    },
    
    button: {
      backgroundColor: '#FF8C00',
      color: '#fff',
      padding: '10px', 
      border: 'none',
      borderRadius: '5px',
      width: '120px',
      cursor: 'pointer',
      fontSize: '0.9rem'  
    },
    note: {
      textAlign: 'left',
      padding: '15px'
    },
    pagination: {
      textAlign: 'right',
      padding: '15px',
      marginTop: '200px'
    },
    
};
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleChangePage = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }
  const handleServiceClick = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <div>
    <div style={styles.container}>
      <div className='Tilte-table' style={{ paddingBottom: '20px' }}>
        <h4>DANH SÁCH CÔNG VIỆC</h4>
        <div className="dropdown-container" style={{ paddingTop: '15px' }}>
          <label>Hiển thị:</label>
          <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
            <option>Theo ngày / tuần / tháng</option>
            <option>Theo ngày</option>
            <option>Theo tuần</option>
            <option>Theo tháng</option>
          </select>
        </div>
      </div>

      <table style={styles.table}>
        <thead>
          <tr style={styles.header}>
            <th style={styles.cell}>STT</th>
            <th style={styles.cell}>Căn hộ</th>
            <th style={styles.cell}>Dịch vụ</th>
            <th style={styles.cell}>Khách hàng</th>
            <th style={styles.cell}>Số điện thoại</th>
            <th style={styles.cell}>Khung thời gian</th>
          </tr>
        </thead>
        <tbody>
          {data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((item, index) => (
            <tr key={index} style={styles.row}>
              <td style={styles.cell}>{item.no}</td>
              <td style={styles.cell}>{item.apartment}</td>
              <td style={{...styles.cell, cursor: 'pointer', 
              }}
    onClick={() => handleServiceClick(item.service)}>
    <a>{item.service}</a>
</td>
              <td style={styles.cell}>{item.customer}</td>
              <td style={styles.cell}>{item.phoneNumber}</td>
              <td style={styles.cell}>{item.createdAt}</td>

            </tr>
          ))}
        </tbody>
      </table>
      <div style={styles.pagination}>
        Rows per page:
        <select value={rowsPerPage} onChange={(e) => { setRowsPerPage(Number(e.target.value)); setCurrentPage(1); }}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          
        </select>
        {`${(currentPage - 1) * rowsPerPage + 1}-${Math.min(currentPage * rowsPerPage, data.length)} of ${data.length}`}
        <button onClick={() => handleChangePage("prev")} disabled={currentPage === 1}>&lt;</button>
        <button onClick={() => handleChangePage("next")} disabled={currentPage === totalPages}>&gt;</button>
        </div>
        </div>
      <Modal isOpen={isModalOpen} service={selectedService} onClose={() => setModalOpen(false)} />
    </div>
  );
}


export default ServiceTable;
