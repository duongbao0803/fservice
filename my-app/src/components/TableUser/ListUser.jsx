import React, { useEffect, useState } from "react";
import axios from "axios";

import { fetchUser } from "../../services/UserService";
import Table from "react-bootstrap/Table";
import AddModal from "../TableUser/AddUserModal";

import EditModal from "../TableUser/EditModal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteModal from "./DeleteModal";
import ReactPaginate from "react-paginate";
import { format } from "date-fns";

const ListUser = () => {
  const [listUser, setListUser] = useState([]);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [dataUserAdd, setDataUserAdd] = useState({});
  const [dataUserEdit, setDataUserEdit] = useState({});
  const [dataUserDelete, setDataUserDelete] = useState({});
  const [totalPage, setTotalPage] = useState(0);

  const handleClose = () => {
    setShowModalEdit(false);
    setShowModalDelete(false);
  };

  useEffect(() => {
    // getListUser();
    getUser(1);
  }, []);

  const handleAdd = () => {
    setDataUserAdd();
    setShowModalAdd(true);
  };

  const handleEditUser = (user) => {
    setDataUserEdit(user.id);
    setShowModalEdit(true);
  };

  const handleDeleteUser = (user) => {
    console.log("check delte", user);
    setDataUserDelete(user.id);
    setShowModalDelete(true);
  };

  const getUser = async (page) => {
    try {
      let res = await fetchUser(page);
      if (res && res.data) {
        const xPaginationHeader = res.headers?.["x-pagination"];
        if (xPaginationHeader) {
          const paginationData = JSON.parse(xPaginationHeader);
          const sumPage = paginationData.TotalPages;
          setTotalPage(sumPage);
        }
        setListUser(res.data);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
  const handlePageClick = (e) => {
    getUser(+e.selected + 1);
  };

  return (
    <div className="container">
      <div className="button">
        <button onClick={() => handleAdd()}>Add user</button>
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
          {listUser.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>
              <td>{format(new Date(item.dateOfBirth), "dd-MM-yyyy")}</td>
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
        pageRangeDisplayed={1}
        pageCount={totalPage}
        marginPagesDisplayed={1}
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

      <AddModal
        show={showModalAdd}
        handleClose={handleClose}
        dataUserAdd={dataUserAdd}
        // getUser={getUser}
        // handleDeleteInfoUser={handleDeleteInfoUser}
      />
      <EditModal
        show={showModalEdit}
        handleClose={handleClose}
        dataUserEdit={dataUserEdit}
        // handleEditInfoUser={handleEditInfoUser}
      />
      <DeleteModal
        show={showModalDelete}
        handleClose={handleClose}
        dataUserDelete={dataUserDelete}
        getUser={getUser}

        // handleDeleteInfoUser={handleDeleteInfoUser}
      />
    </div>
  );
};
export default ListUser;
