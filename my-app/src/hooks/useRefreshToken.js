import { sendRefreshToken } from "../services/UserService";

export default function UseRefreshToken() {
    async function refresh() {
        const refesh = await sendRefreshToken({
        
            "accessToken": localStorage.getItem("accesstoken"),
            "refreshToken": localStorage.getItem("refreshtoken")
          
        });
        if (refesh.status === 200){
            localStorage.removeItem("accesstoken");
            localStorage.removeItem("refreshtoken");
            localStorage.setItem("accesstoken", refesh.data.jwtToken);
            localStorage.setItem("refreshtoken", refesh.data.jwtRefreshToken);
            return refesh.data.jwtToken;
        }
        console.log("check refresh",refesh);
        return null;
    }
    return refresh;
}