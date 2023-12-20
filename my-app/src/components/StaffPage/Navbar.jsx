import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext.jsx";
import { Box, Avatar, Typography, Badge } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ButtonBase from "@mui/material/ButtonBase";
import { Button, Dropdown } from "antd";
import Notification from "../Notification/Notification.jsx";
import { useState } from "react";

function Navbar() {
  const theme = useContext(ThemeContext);
  const username = localStorage.getItem("username");
  const avt = localStorage.getItem("avatar");
  const [noticeCount, setNoticeCount] = useState(0);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const style = {
    position: "absolute",
    top: "-5px",
    right: "5px",
    backgroundColor: "red",
    color: "white",
    fontSize: "10px",
    padding: "0px 4px",
    borderRadius: "50%",
  };

  const handleDropdownVisibleChange = (visible) => {
    setDropdownVisible(visible);
  };

  const handleCount = (count) => {
    setNoticeCount(count);
  };

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
            {/* <ChatBubbleOutlineIcon fontSize="inherit" /> */}
          </ButtonBase>

          <Button
            style={{
              boxShadow: "none",
              backgroundColor: "transparent",
              border: "none",
              color: theme.palette.primary.main,
            }}
          >
            <ChatBubbleOutlineIcon />
          </Button>

          <Dropdown
            overlay={<Notification handleCount={handleCount} />}
            placement="bottomRight"
            arrow={{
              pointAtCenter: true,
            }}
            trigger={["click"]}
            open={dropdownVisible}
            onOpenChange={handleDropdownVisibleChange}
          >
            <Button
              style={{
                boxShadow: "none",
                backgroundColor: "transparent",
                border: "none",
                color: theme.palette.primary.main,
              }}
            >
              <span className="notification-count" style={style}>
                {noticeCount}
              </span>

              {/* <Badge
                color="error"
                variant="dot"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              > */}

              <NotificationsIcon />
              {/* </Badge> */}
            </Button>
          </Dropdown>

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
