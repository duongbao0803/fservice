import React, { useState, useEffect } from "react";
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
import { loginAPI } from "../../services/UserService";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import ReCaptcha from "../reCaptcha/GG_ReCaptcha";
import { Helmet } from "react-helmet";
import "../../css/styleLogin.css";

function Loginv2() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [userName, setuserName] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
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
    if (!email || !password) {
      toast.error("Error! You must fill both email and password");
      return;
    }
    let res = await loginAPI(email, password);
    console.log("check mail", res.data.status);
    if (res.status !== 401 && res.status !== 400) {
      if (res && res.data && res.data.status === true) {
        Cookies.set("token", res.data.jwtToken);
        if (rememberMe) {
          localStorage.setItem("rememberEmail", email);
          localStorage.setItem("rememberPassword", password);
        } else {
          localStorage.removeItem("rememberEmail");
          localStorage.removeItem("rememberPassword");
        }
        navigate("/");
      } else {
        toast.error(res.data);
      }
    } else {
      toast.error(res.message || res.data.errors.Email[0]);
    }
  };

  const HandleSignup = () => {};

  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

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

            <MDBTabsPane show={justifyActive === "tab2"}>
              <MDBInput
                wrapperClass="mb-4"
                label="Name"
                id="form1"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Username"
                id="form1"
                type="text"
                required
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form1"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <MDBInput
                wrapperClass="mb-4"
                label="Phone"
                id="form1"
                type="password"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form1"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <MDBInput
                wrapperClass="mb-4"
                label="Confirm Password"
                id="form1"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
              />

              <div className="d-flex  mb-4">
                <ReCaptcha />
              </div>

              <MDBBtn className="mb-4 w-100" onClick={HandleSignup}>
                Sign up
              </MDBBtn>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBContainer>
        <ToastContainer />
      </div>
    </>
  );
}

export default Loginv2;
