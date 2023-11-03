import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";

function createData(serviceName, quantity, used, remaining, action) {
  return { serviceName, quantity, used, remaining, action };
}

const rows = [
  createData('Tổng vệ sinh nhà cửa', 9, 0, 9, 'Sử dụng'),
  createData('Giặt ủi quần áo', 6, 0, 6, 'Sử dụng'),
  createData('Giao nước', 4, 3, 1, 'Sử dụng'),
  createData('Vệ sinh máy lạnh', 1, 1, 0, 'Mua thêm'),
];

function Rightbar() {

  return (

    <div className="right-bar-details">
      <h5 className="mb-4">Gói dịch vụ của căn hộ</h5>
      <div className="right_bar-details-main" style={{ padding: '20px' }}>
        <div className="chooseHouse-details pb-3">
          <div className="choose">
          <a href style={{borderBottom: '3px solid #ff8228'}}>Căn hộ 1</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href>Căn hộ 2</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href>Căn hộ 3</a>
          </div>
          <div className="orderedPackage-details">
            <div className="orderedPackage-details_main d-flex justify-content-between">
              <div className="orderedPackage-details-name ">
                <span>COMBO VỆ SINH NHÀ Ở (Cho căn 1PN)</span>
              </div>
              <div className="orderedPackage-details-status">
                <span>Trạng thái: </span>
                <span>ĐANG HOẠT ĐỘNG</span>
              </div>
            </div>
            <div className="info-ordered-details">
              <table className="info_ordered-details-table">
                <tbody><tr />
                  <tr />
                  <tr>
                    <td>Căn hộ:</td>
                    <td>S101-0310-Vinhomes Grand Park</td>
                  </tr>

                  <tr>
                    <td>Áp dụng từ:</td>
                    <td>01/10/2023 - 31/10/2023</td>

                  </tr>

                </tbody></table>
              <div className="choose-details_table">
                <tr>
                  <td>
                    <span style={{borderBottom: '3px solid #ff8228'}}>Dịch vụ</span>
                  </td>
                  <td>
                    <span> Sử dụng</span>
                  </td>
                </tr>

              </div>
              <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
                <Table sx={{

                  minWidth: 650,

                  '& .MuiTableCell-root': {
                    borderBottom: 'none',
                    backgroundColor: 'transparent',
                  },
                  '& .MuiTableHead-root .MuiTableCell-root': {
                    borderBottom: 'none',
                    backgroundColor: 'transparent',

                  },
                  borderCollapse: 'separate',
                  borderSpacing: '0',
                }} size="small" aria-label="a dense table">
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
                        <TableCell component="th" scope="row">{row.serviceName}</TableCell>
                        <TableCell align="right">{row.quantity}</TableCell>
                        <TableCell align="right">{row.used}</TableCell>
                        <TableCell align="right">{row.remaining}</TableCell>
                        <TableCell align="right" className="action">{row.action}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

            </div>
            <Link to="/managepackage">
            <div className="button-details d-flex justify-content-end" style={{marginTop: '10px', textDecoration: "none"}}>
              <button>Quay về</button>
            </div>
            </Link>
          </div>

        </div>
      </div>


    </div>



  );
}

export default Rightbar;