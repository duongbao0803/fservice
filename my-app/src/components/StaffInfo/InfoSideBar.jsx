import React from "react";
import { ThemeContext, customTheme } from '../ThemeContext/ThemeContext.jsx';
import { useContext } from "react";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import KeyIcon from '@mui/icons-material/Key';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Logo from "../../img/logo_web_2.png";
import { Box } from "@mui/material";
import { Link } from "@mui/material"



function InfoSideBar() {
    const theme = useContext(ThemeContext);
    return (
        <Box sx={{ display: 'flex' }}>
            {/* Sidebar */}
            <Box className="InfoSideBar" sx={{ width: '260px',  backgroundColor: 'white', padding: '20px'  }}>

                {/* Logo */}
                <div style={{ alignSelf: 'flex-start', margin: '5px 0' }}>
                    <img src={Logo} alt="Logo" width="117px" />
                </div>

                <div className="Info-menu-section">
                    <div className="Job">
                    <h3 style={{ color: theme.palette.secondary.main }}>CÔNG VIỆC</h3>
                    <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                    <li>
                            <Link href="#" underline="none">
                                <FormatListBulletedIcon style={{ marginRight: '8px' }} /> Quản lí công việc
                            </Link>
                        </li>
                    </ul>
                    </div>
                
                    <div className="Information">
                    <h3 style={{ color: theme.palette.secondary.main }}>THÔNG TIN</h3>
                    <ul style={{ listStyleType: 'none' }}>
                        <li>
                            <Link href="#" underline="none" style={{background: theme.palette.background.default, borderRadius: '10px', padding: '10px', color: 'white'}}>
                                <ManageAccountsIcon style={{ marginRight: '8px' }} /> Tài khoản của tôi
                            </Link>
                        </li>
                        <li>
                            <Link href="#" underline="none">
                                <KeyIcon style={{ marginRight: '8px' }} /> Thay đổi mật khẩu
                            </Link>
                        </li>
                        </ul>
                        </div>
                </div>
            </Box>
          
        </Box>

    );
}
export default InfoSideBar;