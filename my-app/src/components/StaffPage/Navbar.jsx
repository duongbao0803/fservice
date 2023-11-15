import React, { useContext } from "react";
import { ThemeContext, customTheme } from "../ThemeContext/ThemeContext.jsx";
import { Box, Avatar, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ButtonBase from "@mui/material/ButtonBase";

function Navbar() {
  const theme = useContext(ThemeContext);
  const username = localStorage.getItem("username");
  const avt = localStorage.getItem("avatar");
  return (
    <div className="Navbar">
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          height: "60px",
          paddingRight: "20px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ButtonBase
            focusRipple
            className="header-icon"
            sx={{
              color: theme.palette.primary.main,
              fontSize: "24px",
              marginRight: "20px",
            }}
          >
            <ChatBubbleOutlineIcon fontSize="inherit" />
          </ButtonBase>

          <ButtonBase
            focusRipple
            className="header-icon"
            sx={{
              color: theme.palette.primary.main,
              fontSize: "24px",
              marginRight: "20px",
            }}
          >
            <NotificationsIcon fontSize="inherit" />
          </ButtonBase>

          <Box
            className="account"
            sx={{ display: "flex", alignItems: "center", marginLeft: "20px" }}
          >
            {avt === null ? (
              <Avatar
                className="account-icon"
                sx={{ backgroundColor: "grey", marginRight: "20px" }}
              />
            ) : (
              <img
                src={avt}
                style={{
                  margin: "20px",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            )}
            <Typography
              className="account-name"
              variant="body1"
              component="span"
              sx={{ fontSize: "18px" }}
            >
              {username}
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Navbar;
