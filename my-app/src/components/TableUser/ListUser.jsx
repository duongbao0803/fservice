import React, { useEffect, useState } from "react";
import axios from "axios";

import { fetchUser } from "../../services/UserService";
import Table from "react-bootstrap/Table";
import EditModal from "../TableUser/EditModal";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteModal from "./DeleteModal";
import ReactPaginate from "react-paginate";
import _ from "lodash";

const ListUser = () => {
  const [listUser, setListUser] = useState([]);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [dataUserEdit, setDataUserEdit] = useState({});
  const [dataUserDelete, setDataUserDelete] = useState({});
  const [total, setTotal] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const handleClose = () => {
    setShowModalEdit(false);
    setShowModalDelete(false);
  };

  useEffect(() => {
    // getListUser();
    getUser();
  }, []);

  const handleEditUser = (user) => {
    setDataUserEdit(user);
    setShowModalEdit(true);
  };

  const handleDeleteUser = (user) => {
    setDataUserDelete(user);
    setShowModalDelete(true);
  };

  const handleEditInfoUser = (user) => {
    console.log(user);
  };

  const handleDeleteInfoUser = (user) => {
    let cloneListUser = _.cloneDeep(listUser).filter(
      (item) => item.id !== user.id
    );
    setListUser(cloneListUser);
  };

  const getUser = async () => {
    try {
      let res = await fetchUser();
      console.log("check user", res.headers);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  // console.log("check name", res.data);

  // setListUser(res.data.data);
  // setTotal(res.data.total);
  // setTotalPage(res.data.total_pages);

  const handlePageClick = (e) => {
    getUser(+e.selected + 1);
  };

  return (
    <div className="container">
      <div className="button">
        <button>Add user</button>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>phoneNumber</th>
            <th>Email</th>
            <th>address</th>
            <th>DOB</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUser.map((item, index) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>
              <td>{item.dateOfBirth}</td>
              <td>
                <button onClick={() => handleEditUser(item)}>Update</button>
              </td>
              <td>
                <button onClick={() => handleDeleteUser(item)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        // pageRangeDisplayed={0}
        pageCount={totalPage}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />

      <EditModal
        show={showModalEdit}
        handleClose={handleClose}
        dataUserEdit={dataUserEdit}
        handleEditInfoUser={handleEditInfoUser}
      />
      <DeleteModal
        show={showModalDelete}
        handleClose={handleClose}
        dataUserDelete={dataUserDelete}
        handleDeleteInfoUser={handleDeleteInfoUser}
      />
    </div>
  );
};
export default ListUser;
