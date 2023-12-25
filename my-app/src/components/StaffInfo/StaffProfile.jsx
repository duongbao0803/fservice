import React, { useContext, useRef } from "react";
import { Launch, editUser } from "../../services/UserService";
import { useState } from "react";
import { useEffect } from "react";
import { storage } from "../../firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Typography } from "@mui/material";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";

function StaffProfile() {
  const email = localStorage.getItem("username");
  const [username, setUserName] = useState("");
  const [name, setName] = useState(localStorage.getItem("name"));
  const [dateOfBirth, setDateOfBirth] = useState(
    localStorage.getItem("dateOfBirth")
  );
  const [phoneNumber, setPhoneNumber] = useState(
    localStorage.getItem("phoneNumber")
  );
  const [address, setAddress] = useState(localStorage.getItem("address"));
  const [selectedFileName, setSelectedFileName] = useState("Chưa chọn ảnh");
  const [selectedImage, setSelectedImage] = useState("");
  const checkImage = localStorage.getItem("avatar");

  const formik = useFormik({
    initialValues: {
      name: name || "",
      phoneNumber: phoneNumber || "",
      address: address || "",
      dateOfBirth: dateOfBirth || "",
      avatar: "",
      file: null,
    },
    validationSchema: Yup.object({
      name: Yup.string(),
      dateOfBirth: Yup.date(),
      phoneNumber: Yup.string().matches(
        /^[0-9]{10}$/,
        "Số điện thoại phải có 10 số"
      ),
      address: Yup.string(),
    }),
    onSubmit: async (values) => {
      const handleUploadFirebase = async () => {
        if (values.file) {
          const file = values.file;
          const storageRef = ref(
            storage,
            `/Fservice/${generateUniqueFileName(file.name)}`
          );
          await uploadBytes(storageRef, file, { contentType: file.type });
          values.avatar = await getDownloadURL(storageRef);
        } else {
          values.avatar = localStorage.getItem("avatar");
        }
      };

      await handleUploadFirebase();

      try {
        const res = await editUser(localStorage.getItem("id"), {
          name: values.name,
          phoneNumber: values.phoneNumber,
          address: values.address,
          dateOfBirth: values.dateOfBirth,
          avatar: values.avatar,
        });
        if (res && res.status === 200) {
          toast.success("Sửa thông tin thành công");
        } else {
          toast.error("Sửa thông tin thất bại");
        }
        localStorage.setItem("avatar", values.avatar);
        localStorage.setItem("name", values.name);
        localStorage.setItem("phoneNumber", values.phoneNumber);
        localStorage.setItem("dateOfBirth", values.dateOfBirth);
        localStorage.setItem("address", values.address);
      } catch (error) {
        console.log("Error Editting User", error);
      }
    },
  });

  // Hàm để tạo tên tệp tin duy nhất
  const generateUniqueFileName = (originalFileName) => {
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    const extension = originalFileName.split(".").pop();
    return `${timestamp}_${randomString}.${extension}`;
  };

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedDateOfBirth = localStorage.getItem("dateOfBirth");
    const storedAddress = localStorage.getItem("address");
    const storedPhoneNumber = localStorage.getItem("phoneNumber");

    if (
      checkImage !== null &&
      checkImage?.length > 0 &&
      checkImage !== "null"
    ) {
      setSelectedImage(checkImage);
    } else {
      setSelectedImage(require("../../assets/img/img-user.png"));
    }

    if (storedName) {
      setName(storedName);
    }
    if (storedDateOfBirth) {
      const formatDate = storedDateOfBirth.split("T")[0];
      setDateOfBirth(formatDate);
    }
    if (storedAddress) {
      setAddress(storedAddress);
    }
    if (storedPhoneNumber) {
      setPhoneNumber(storedPhoneNumber);
    }
  }, []);

  const fileInputRef = useRef(null);

  const handleFileInput = (e) => {
    fileInputRef.current.click();
    e.preventDefault();
  };

  const displaySelectedFileName = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setSelectedFileName(selectedFile.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setSelectedFileName("Chưa chọn ảnh");
    }
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    formik.setFieldValue("name", newName);
    console.log("check new name", newName);
  };

  const handlePhoneNumberChange = (e) => {
    const newPhoneNumber = e.target.value;
    setPhoneNumber(newPhoneNumber);
    formik.setFieldValue("phoneNumber", newPhoneNumber);
  };

  const handleAddressChange = (e) => {
    const newAddress = e.target.value;
    setAddress(newAddress);
    formik.setFieldValue("address", newAddress);
  };

  // date picker
  const onChange = (date, dateString) => {
    setDateOfBirth(date.toISOString().slice(0, 10));
    formik.setFieldValue("dateOfBirth", date.toISOString().slice(0, 10));
  };

  const dateFormat = "YYYY-MM-DD";
  const displayFormat = "DD/MM/YYYY";

  return (
    <div className="container-fluid mt-5">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <h5>Thông tin</h5>
          <div className="col-md-3">
            <div className="info-img">
              <div className="img-container">
                <img
                  src={selectedImage}
                  width={"100%"}
                  height={"100%"}
                  alt="avatar"
                />
              </div>
              <div>
                <h4 style={{ fontWeight: "400" }}>{name}</h4>
                <p style={{ color: "#757575" }}>Nhân viên</p>
              </div>
              <div className="update-img">
                <input
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  id="file"
                  type="file"
                  onBlur={formik.handleBlur}
                  onChange={(event) => {
                    const file = event.target.files[0];
                    if (file.size > 3 * 1024 * 1024) {
                      toast.error("Dung lượng ảnh quá giới hạn cho phép");
                      return;
                    }
                    formik.setFieldValue("file", event.target.files[0]);
                    displaySelectedFileName(event);
                  }}
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  accept="image/*"
                />
                <button onClick={handleFileInput}>Chọn ảnh</button>
                <p>Dung lượng ảnh tối đa 3 MB</p>
                <p>Định dạng: .JPEG, .PNG</p>
                <p>Ảnh đã chọn: {selectedFileName}</p>
              </div>
            </div>
          </div>
          <div className="col md-9">
            <div
              className="info-text"
              style={{ backgroundColor: "#fff", height: "100%" }}
            >
              <div className="header-info">
                <p>Chi tiết tài khoản</p>
              </div>
              <div className="body-info">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label>Họ và tên</label>
                    <input
                      className="form-control"
                      type="text"
                      id="name"
                      name="name"
                      defaultValue={localStorage.getItem("name")}
                      value={name}
                      onChange={handleNameChange}
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="exampleInputEmail1">Địa chỉ email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      readOnly
                      value={email}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Địa chỉ</label>
                  <input
                    className="form-control"
                    type="text"
                    name="address"
                    value={address}
                    onChange={handleAddressChange}
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label>Số điện thoại</label>
                    <input
                      className="form-control"
                      type="text"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                    />
                    <span style={{ position: "absolute" }}>
                      {formik.errors.phoneNumber && (
                        <Typography variant="caption" color="red">
                          {formik.errors.phoneNumber}
                        </Typography>
                      )}
                    </span>
                  </div>
                  <div className="col-md-6 form-group">
                    <label>Ngày sinh</label>
                    <Space direction="vertical">
                      <DatePicker
                        onChange={onChange}
                        defaultValue={dayjs(`${dateOfBirth}`, dateFormat)}
                        format={displayFormat}
                      />
                    </Space>
                  </div>
                </div>
                <div className="update-btn mt-3">
                  <button type="submit">Cập nhật thông tin</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default StaffProfile;
