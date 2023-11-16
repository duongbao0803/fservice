import React, { useState, useEffect, useContext } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import axios from "axios";
import { loginAPI, sendRefreshToken, signUp } from "../../services/UserService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import jwt_decode from "jwt-decode";
import { useFormik } from "formik";
import { Button, Typography } from "@mui/material";
import "../../assets/css/styleLogin.css";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { Session } from "../../App";

function Loginv2() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const session = useContext(Session);
  const navigate = useNavigate();
  const accesstoken = localStorage.getItem("accesstoken");

  useEffect(() => {
    if (accesstoken) {
      navigate("/");
    }

    const rememberEmail = localStorage.getItem("rememberEmail");
    const rememberPassword = localStorage.getItem("rememberPassword");

    if (rememberEmail) {
      setEmail(rememberEmail);
      setRememberMe(true);
    }
    if (rememberPassword) {
      setPassword(rememberPassword);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async () => {
    if (!password) {
      toast.error("Mật khẩu không được để trống");
    }
    try {
      const res = await loginAPI(email, password);
      console.log("check res", res);
      if (res.status !== 401 && res.status !== 400) {
        if (res && res.data && res.data.status === true) {
          session.setUser(res.data);
          const jwtToken = res.data.jwtToken;
          const jwtRefreshToken = res.data.jwtRefreshToken;
          if (jwtToken) {
            const decoded = jwt_decode(jwtToken);
            const role =
              decoded[
                "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
              ];
            if (role === "ADMIN") {
              navigate("/error");
            } else if (role === "STAFF") {
              navigate("/staff");
            } else {
              navigate("/");
            }
            const userName =
              decoded[
                "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
              ];
            setIsLogged(true);
            localStorage.setItem("isLogged", isLogged);
            localStorage.setItem("username", userName);
            localStorage.setItem("role", role);
            localStorage.setItem("accesstoken", jwtToken);
            localStorage.setItem("refreshtoken", jwtRefreshToken);

            if (rememberMe) {
              localStorage.setItem("rememberEmail", email);
              localStorage.setItem("rememberPassword", password);
            } else {
              localStorage.removeItem("rememberEmail");
              localStorage.removeItem("rememberPassword");
            }
          } else {
            toast.error("Lỗi token.");
          }
        } else {
          toast.error(res.data);
        }
      } else {
        toast.error(res.message || res.data.errors.Email[0]);
      }
    } catch (error) {
      console.log("Error fetching Signin", error);
    }
  };

  const [justifyActive, setJustifyActive] = useState("tab1");
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      dateOfBirth: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string(),
      phoneNumber: Yup.string().matches(
        /^[0-9]{10}$/,
        "Số điện thoại phải có 10 số"
      ),
      address: Yup.string(),
      dateOfBirth: Yup.date(),
      email: Yup.string().email("Email không hợp lệ"),
      password: Yup.string()
        .matches(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]+$/,
          "Mật khẩu không hợp lệ (Ví dụ: Abc@12345)"
        )
        .min(7, "Mật khẩu cần có ít nhất 7 kí tự (Gợi ý: Abc@12345) ")
        .max(12, "Mật khẩu tối đa là 12 kí tự"),

      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Mật khẩu xác nhận phải trùng với mật khẩu"
      ),
    }),

    onSubmit: async (values) => {
      try {
        let res = await signUp({
          name: values.name,
          phoneNumber: values.phoneNumber,
          address: values.address,
          dateOfBirth: values.dateOfBirth,
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
        });
        if (res.data.status === "Error") {
          toast.error(res.data.message);
        } else {
          toast.success(
            "Đăng kí thành công, vui lòng kiểm tra email để xác nhận tài khoản"
          );
          navigate("/");
        }
      } catch (error) {
        console.log("Error Adding User", error);
      }
    },
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FService | Tài khoản</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div
        className="authen d-flex"
        style={{
          minHeight: "100vh",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "orange",
        }}
      >
        <MDBContainer
          className="p-3 my-5 d-flex flex-column"
          style={{
            width: "500px",
            border: "1px solid black",
            backgroundColor: "white",
          }}
        >
          <MDBTabs
            pills
            justify
            className="mb-3 d-flex flex-row justify-content-between"
          >
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleJustifyClick("tab1")}
                active={justifyActive === "tab1"}
              >
                Đăng nhập
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleJustifyClick("tab2")}
                active={justifyActive === "tab2"}
              >
                Đăng ký
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBTabsContent>
            <MDBTabsPane show={justifyActive === "tab1"}>
              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form1"
                type="email"
                required={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <MDBInput
                wrapperClass="mb-4"
                label="Mật khẩu"
                id="form2"
                type="password"
                required={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="d-flex mx-2 mb-4 justify-content-between">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Ghi nhớ"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <a href="#">Quên mật khẩu?</a>
              </div>

              <MDBBtn className="mb-4 w-100" onClick={handleLogin}>
                Đăng nhập
              </MDBBtn>
            </MDBTabsPane>

            {/* Register */}
            <MDBTabsPane show={justifyActive === "tab2"}>
              <form onSubmit={formik.handleSubmit}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Họ và tên"
                  id="name"
                  type="text"
                  required
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />

                <div style={{ position: "relative" }}>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    id="email"
                    type="email"
                    required
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  <div style={{ position: "absolute", top: "34px" }}>
                    {formik.errors.email && (
                      <Typography variant="caption" color="red">
                        {formik.errors.email}
                      </Typography>
                    )}
                  </div>
                </div>

                <div style={{ position: "relative" }}>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Số điện thoại"
                    id="phoneNumber"
                    type="text"
                    required
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                  />
                  <div style={{ position: "absolute", top: "34px" }}>
                    {formik.errors.phoneNumber && (
                      <Typography variant="caption" color="red">
                        {formik.errors.phoneNumber}
                      </Typography>
                    )}
                  </div>
                </div>

                <div style={{ position: "relative" }}>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Địa chỉ"
                    id="address"
                    type="text"
                    required
                    value={formik.values.address}
                    onChange={formik.handleChange}
                  />
                  <div style={{ position: "absolute", top: "34px" }}>
                    {formik.errors.address && (
                      <Typography variant="caption" color="red">
                        {formik.errors.address}
                      </Typography>
                    )}
                  </div>
                </div>
                <div style={{ position: "relative" }}>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Ngày sinh"
                    id="dateOfBirth"
                    type="date"
                    required
                    value={formik.values.dateOfBirth}
                    onChange={formik.handleChange}
                  />{" "}
                  <div style={{ position: "absolute", top: "34px" }}>
                    {formik.errors.dateOfBirth && (
                      <Typography variant="caption" color="red">
                        {formik.errors.dateOfBirth}
                      </Typography>
                    )}{" "}
                  </div>{" "}
                </div>
                <div style={{ position: "relative" }}>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Mật khẩu"
                    id="password"
                    type="password"
                    required
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />{" "}
                  <div style={{ position: "absolute", top: "34px" }}>
                    {formik.errors.password && (
                      <Typography variant="caption" color="red">
                        {formik.errors.password}
                      </Typography>
                    )}{" "}
                  </div>{" "}
                </div>

                <div style={{ position: "relative" }}>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Xác nhận mật khẩu"
                    id="confirmPassword"
                    type="password"
                    required
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                  />{" "}
                  <div style={{ position: "absolute", top: "34px" }}>
                    {formik.errors.confirmPassword && (
                      <Typography variant="caption" color="red">
                        {formik.errors.confirmPassword}
                      </Typography>
                    )}
                  </div>{" "}
                </div>
                {/* <div className="d-flex  mb-4">
                  <ReCaptcha onChange={handleReCaptchaChange} />
                </div> */}
                <MDBBtn className="mb-4 w-100" type="submit">
                  Đăng ký
                </MDBBtn>
              </form>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBContainer>
      </div>
    </>
  );
}

export default Loginv2;
