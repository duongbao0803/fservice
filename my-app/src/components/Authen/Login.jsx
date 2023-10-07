import React from "react";
import "../../css/styleLogin.css";
import { useState, useEffect } from "react";
import { LoginAPI } from "../../services/UserService";
import { toast } from "react-toastify";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    if (!email || !password) {
      alert("heello");
      toast.error("Error! Incorrect Username or Password");
      return;
    }
    let res = await LoginAPI(email, password);
    console.log("check login: ", res);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    placeholder="Enter password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className={email && password ? "active" : ""}
                  // disabled={email && password ? false : true}
                  onClick={() => handleLogin()}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
