import React, { useContext } from "react";
import { ThemeContext, customTheme } from "../ThemeContext/ThemeContext.jsx";
import { Box, Avatar, Typography, Badge } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ButtonBase from "@mui/material/ButtonBase";
import { Button, Dropdown } from "antd";
import Notification from "./Notification/Notification.jsx";

function Navbar() {
  const theme = useContext(ThemeContext);
  const username = localStorage.getItem("username");
  const avt = localStorage.getItem("avatar");

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];

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
            overlay={<Notification />}
            placement="bottomRight"
            arrow={{
              pointAtCenter: true,
            }}
            trigger={["click"]}
          >
            <Button
              style={{
                boxShadow: "none",
                backgroundColor: "transparent",
                border: "none",
                color: theme.palette.primary.main,
              }}
            >
              <Badge
                color="error"
                variant="dot"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <NotificationsIcon />
              </Badge>
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
