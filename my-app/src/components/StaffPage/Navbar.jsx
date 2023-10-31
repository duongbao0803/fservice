import React, { useContext } from "react";
import { ThemeContext, customTheme } from '../ThemeContext/ThemeContext.jsx';
import { Box, Avatar, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ButtonBase from '@mui/material/ButtonBase';


function Navbar() {
    // Use theme from the context
    const theme = useContext(ThemeContext);

    return (
        <div className="Navbar">
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '60px', paddingRight: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ButtonBase focusRipple className="header-icon" sx={{ color: theme.palette.primary.main, fontSize: '24px', marginRight: '20px' }}>
                        <ChatBubbleOutlineIcon fontSize="inherit" />
                    </ButtonBase>

                    <ButtonBase focusRipple className="header-icon" sx={{ color: theme.palette.primary.main, fontSize: '24px', marginRight: '20px' }}>
                        <NotificationsIcon fontSize="inherit" />
                    </ButtonBase>

                    <Box className="account" sx={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
                        <Avatar className="account-icon" sx={{ backgroundColor: 'grey', marginRight: '20px' }} />
                        <Typography className="account-name" variant="body1" component="span" sx={{ fontSize: '18px' }}>
                            phwtram0803@fpt.com
                        </Typography>

                    </Box>
                </Box>
            </Box>

        </div>
    );
}

export default Navbar;
