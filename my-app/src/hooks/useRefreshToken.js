import { Navigate } from "react-router-dom";
import { sendRefreshToken } from "../services/UserService";
import { toast } from "react-toastify";

export default function UseRefreshToken() {
  async function refresh() {
    const refesh = await sendRefreshToken({
      accessToken: localStorage.getItem("accesstoken"),
      refreshToken: localStorage.getItem("refreshtoken"),
    });
    if (refesh.status === 200) {
      localStorage.removeItem("accesstoken");
      localStorage.removeItem("refreshtoken");
      localStorage.setItem("accesstoken", refesh.data.jwtToken);
      localStorage.setItem("refreshtoken", refesh.data.jwtRefreshToken);
      return refesh.data.jwtToken;
    } 
    else 
    {
      localStorage.removeItem("accesstoken");
      localStorage.removeItem("refreshtoken");
      localStorage.removeItem("isLogged");
      localStorage.removeItem("username");
      localStorage.removeItem("phoneNumber");
      localStorage.removeItem("name");
      localStorage.removeItem("dateOfBirth");
      localStorage.removeItem("address");
      localStorage.removeItem("avatar");
      localStorage.removeItem("name");
      localStorage.removeItem("role");
      toast.success("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");
      return <Navigate to={"/authen"} />;
    }
  }
  return refresh;
}
