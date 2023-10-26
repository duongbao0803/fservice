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
import { launch, loginAPI, signUp } from "../../services/UserService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import jwt_decode from "jwt-decode";
import { useFormik } from "formik";
import { Button, Typography } from "@mui/material";
import ReCaptcha from "../ReCaptcha/GG_ReCaptcha";
import "../../assets/css/styleLogin.css";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { Session } from "../../App";

function Loginv2() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);

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
    if (!isRecaptchaVerified) {
      toast.error("Please complete the ReCaptcha");
      return;
    }
    let res = await loginAPI(email, password);
    if (res.status !== 401 && res.status !== 400) {
      if (res && res.data && res.data.status === true) {
        session.setUser(res.data);
        const jwtToken = res.data.jwtToken;
        if (jwtToken) {
          const decoded = jwt_decode(jwtToken);
          const role =
            decoded[
              "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
            ];
          const userName =
            decoded[
              "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
            ];

          localStorage.setItem("username", userName);
          localStorage.setItem("role", role);
          localStorage.setItem("accesstoken", jwtToken);

          if (rememberMe) {
            localStorage.setItem("rememberEmail", email);
            localStorage.setItem("rememberPassword", password);
          } else {
            localStorage.removeItem("rememberEmail");
            localStorage.removeItem("rememberPassword");
          }
          navigate("/");
        } else {
          toast.error("Failed to decode the token.");
        }
      } else {
        toast.error(res.data);
      }
    } else {
      toast.error(res.message || res.data.errors.Email[0]);
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
        "Phone number must be 10 digits"
      ),
      address: Yup.string(),
      dateOfBirth: Yup.date(),
      email: Yup.string().email("Invalid email address"),
      password: Yup.string()
        .matches(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]+$/,
          "Password must contain at uppercase, lowercase letter, digit, special character (@#$%^&*!)"
        )
        .min(7, "Password must be at least 7 characters")
        .max(12, "Password can't exceed 12 characters"),

      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "ConfirmPassword must match with Password"
      ),
    }),

    onSubmit: async (values) => {
      console.log("Form submitted", values);
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
        console.log("Check ressssss", res.data.status);
        if (res.data.status === "Error") {
          toast.error(res.data.message);
        } else {
          toast.success(
            "Đăng kí thành công, vui lòng check mail để xác nhận tài khoản"
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
        <title>FService | Authen</title>
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
                Login
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleJustifyClick("tab2")}
                active={justifyActive === "tab2"}
              >
                Register
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBTabsContent>
            <MDBTabsPane show={justifyActive === "tab1"}>
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="form1"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form2"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="d-flex mx-2 mb-4 justify-content-between">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  required
                  label="Remember me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <a href="!#">Forgot password?</a>
              </div>

              <MDBBtn className="mb-4 w-100" onClick={handleLogin}>
                Sign in
              </MDBBtn>
            </MDBTabsPane>

            {/* Register */}
            <MDBTabsPane show={justifyActive === "tab2"}>
              <form onSubmit={formik.handleSubmit}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Name"
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
                    label="Phone"
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
                    label="Address"
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
                    label="Date Of Birth"
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
                    label="Password"
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
                    label="Confirm Password"
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
                <div className="d-flex  mb-4">
                  <ReCaptcha />
                </div>
                <MDBBtn className="mb-4 w-100" type="submit">
                  Sign up
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
