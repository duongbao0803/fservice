import React, { useEffect, useState } from "react";
import { fetchUser } from "../../services/UserService";
import Table from "react-bootstrap/Table";
import EditModal from "../TableUser/EditModal";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteModal from "./DeleteModal";
import _ from "lodash";

function InfoUser() {
  const [listUser, setListUser] = useState([]);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [dataUserEdit, setDataUserEdit] = useState({});
  const [dataUserDelete, setDataUserDelete] = useState({});

  const handleClose = () => {
    setShowModalEdit(false);
    setShowModalDelete(false);
  };

  useEffect(() => {
    getListUser();
  }, []);

  const getListUser = async () => {
    let res = await fetchUser();
    if (res && res.data) {
      setListUser(res.data);
    }
  };

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
              <td>{item.name}</td>
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
}
export default InfoUser;
