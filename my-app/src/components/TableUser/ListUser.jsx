import React, { useEffect, useState } from "react";
import { fetchUser } from "../../services/UserService";
import Table from "react-bootstrap/Table";
function InfoUser() {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    getListUser();
  }, []);

  const getListUser = async () => {
    let res = await fetchUser();
    if (res && res.data) {
      setListUser(res.data);
    }
  };

  return (
    <div className="container">
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
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default InfoUser;
