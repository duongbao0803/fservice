import React, { useContext, useRef } from "react";
import { Launch, editUser } from "../../services/UserService";
import { useState } from "react";
import { useEffect } from "react";
import { storage } from "../../firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useFormik } from "formik";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Typography } from "@mui/material";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";

function UserInfo() {
  const email = localStorage.getItem("username");
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
    localStorage.setItem("name", newName);
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
    setDateOfBirth(dateString);
    formik.setFieldValue("dateOfBirth", dateString);
  };
  const dateFormat = "YYYY-MM-DD";

  return (
    <>
      <div class="right-bar">
        <h5 class="mb-4">Thông tin</h5>
        <div class="right_bar-main">
          <form onSubmit={formik.handleSubmit}>
            <div class="row">
              <div class="right-bar col-md-9 col-sm-12 col-lg-8">
                <div class="user-info">
                  <table class="user_info-table">
                    <tr>
                      <th>Email:</th>
                      <td>{localStorage.getItem("username")}</td>
                    </tr>
                    <tr>
                      <th>Họ và tên:</th>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          id="name"
                          name="name"
                          defaultValue={localStorage.getItem("name")}
                          value={name}
                          onChange={handleNameChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Ngày sinh:</th>
                      <td>
                        <Space direction="vertical">
                          <DatePicker
                            onChange={onChange}
                            defaultValue={dayjs(`${dateOfBirth}`, dateFormat)}
                          />
                        </Space>
                      </td>
                    </tr>
                    <tr>
                      <th>Địa chỉ:</th>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          name="address"
                          value={address}
                          onChange={handleAddressChange}
                        />
                      </td>
                    </tr>

                    <tr>
                      <th>Số điện thoại:</th>
                      <td style={{ position: "relative" }}>
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
                      </td>
                    </tr>

                    <tr>
                      <td></td>
                      <td>
                        <Button variant="primary" type="submit">
                          Lưu thay đổi
                        </Button>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div
                class="col-sm-12 col-md-2 col-lg-4 d-flex align-items-center justify-content-center mb-3 mt-3"
                style={{ borderLeft: "3px solid #efefef" }}
              >
                <div>
                  <div className="text-center mb-3">
                    <img
                      src={selectedImage}
                      alt=""
                      width="90px"
                      height="90px"
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <div class="chooseImg text-center" style={{ width: "100%" }}>
                    <input
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      id="file"
                      type="file"
                      onBlur={formik.handleBlur}
                      onChange={(event) => {
                        formik.setFieldValue("file", event.target.files[0]);
                        displaySelectedFileName(event);
                      }}
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      accept="image/*"
                    />
                    <button
                      onClick={handleFileInput}
                      style={{
                        padding: "5px",
                        outline: "none",
                        border: "2px solid #ffb077",
                        backgroundColor: "#fff",
                        marginBottom: "5px",
                      }}
                    >
                      Chọn ảnh
                    </button>
                    <p>Dung lượng file tối đa 1 MB</p>
                    <p>Định dạng: .JPEG, .PNG</p>
                    <p>Ảnh đã chọn: {selectedFileName}</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
