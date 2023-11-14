import { Navigate, useNavigate } from "react-router-dom";
import { sendRefreshToken } from "../services/UserService";
import { toast } from "react-toastify";
import { handleLogout } from "../utils/tools";

export default function UseRefreshToken() {
  async function refresh() {
    try {
      const response = await sendRefreshToken({
        accessToken: localStorage.getItem("accesstoken"),
        refreshToken: localStorage.getItem("refreshtoken"),
      });

      if (response.status === 200) {
        localStorage.removeItem("accesstoken");
        localStorage.removeItem("refreshtoken");
        localStorage.setItem("accesstoken", response.data.jwtToken);
        localStorage.setItem("refreshtoken", response.data.jwtRefreshToken);
        return response.data.jwtToken;
      } else {
        handleLogout();
        toast.warning("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");
        return <Navigate to={"/authen"} />;
      }
    } catch (error) {
      handleLogout();
      toast.warning("Đã xảy ra lỗi khi refresh token. Vui lòng đăng nhập lại.");
      return <Navigate to={"/authen"} />;
    }
  }
  return refresh;
}
