import React from "react";

import '../css/styleStaffWork.css';

import  Navbar from '../components/StaffPage/Navbar'
import Sidebar from "../components/StaffPage/Sidebar";
import WorkTable from "../components/StaffPage/WorkTable";
function Staff() {
    return (
        <>
        <div
        style={{ backgroundColor:'#F5F5F5', height: '800px'}}>
      <Navbar/>
      <WorkTable/>
      <Sidebar/>
      </div>
    </>
  );
}
export default Staff;