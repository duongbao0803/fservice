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
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';

function StaffProfile() {
    // const [username, setUsername] = useState('baoduong03');
    // const [fullName, setFullName] = useState('Dương Tôn Bảo');
    // const [birthDate, setBirthDate] = useState('2023-01-01');
    // const [gender, setGender] = useState('Nam');
    // const [address, setAddress] = useState("112 Đường số 5, phường Hiệp Phú, TP.Thủ Đức, Tp.Hồ Chí Minh.");
    // const [phone, setPhone] = useState('090 001 1234');
    // const [email, setEmail] = useState('baoton1234@gmail.com');
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

            console.log(values);
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
        console.log("check new name", newName);
    };

    const handlePhoneNumberChange = (e) => {
        const newPhoneNumber = e.target.value;
        setPhoneNumber(newPhoneNumber);
        formik.setFieldValue("phoneNumber", newPhoneNumber);

        console.log("check new name", newPhoneNumber);
    };

    const handleAddressChange = (e) => {
        const newAddress = e.target.value;
        setAddress(newAddress);
        formik.setFieldValue("address", newAddress);
        console.log("check new name", newAddress);
    };

    // date picker
    const onChange = (date, dateString) => {
        console.log("check date", dateString);
        setDateOfBirth(dateString);
        formik.setFieldValue("dateOfBirth", dateString);
    };
    const dateFormat = 'YYYY-MM-DD';

    return (
        <div className="Info-container">
            <h5>THÔNG TIN</h5>
            <form onSubmit={formik.handleSubmit}>
                <div className='row staff-info'>
                    <div className='col-md-7 staff-info__table'>
                        <table style={{ width: "100%" }}>
                            <tbody>
                                <tr>
                                    <th><label>Email:</label></th>
                                    <td><p>{email}</p></td>
                                </tr>
                                <tr>
                                    <th><label>Họ và tên:</label></th>
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
                                    <th><label>Ngày sinh:</label></th>
                                    <td>
                                        <Space direction="vertical">
                                            <DatePicker onChange={onChange} defaultValue={dayjs(`${dateOfBirth}`, dateFormat)} />
                                        </Space>
                                    </td>
                                </tr>
                                <tr>
                                    <th><label>Địa chỉ:</label></th>
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
                                    <th><label>Số điện thoại:</label></th>
                                    <td>
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
                                    <th></th>
                                    <td className='text-right'>
                                        <Button variant="primary" type="submit">
                                            Lưu thay đổi
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                    <div className='col-md-5'>
                        {/* <img src='' />
                    <button>Choose image</button>
                    <p>Dung lượng file tối đa 1 MB</p>
                    <p>Định dạng: .JPEG, .PNG</p> */}
                        <div className="avatar-section" style={{ borderLeft: "3px solid #efefef" }}>
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
    );
}


export default StaffProfile;
