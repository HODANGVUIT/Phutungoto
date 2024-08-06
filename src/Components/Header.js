/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link as RouterLink } from "react-router-dom"

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openDropdown = Boolean(anchorEl);

  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, to: "home" },
    { text: "About", icon: <InfoIcon />, to: "introduce" },
    { text: "Work", icon: <CommentRoundedIcon />, to: "work" },
    { text: "Product", icon: <CommentRoundedIcon />, to: "product" },
    { text: "Evaluate", icon: <CommentRoundedIcon />, to: "evaluate" },
    { text: "Contact", icon: <PhoneRoundedIcon />, to: "contact" },
  ];

  const handleLoginOpen = () => setOpenLogin(true);
  const handleLoginClose = () => setOpenLogin(false);
  const handleRegisterOpen = () => setOpenRegister(true);
  const handleRegisterClose = () => setOpenRegister(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav>
      <div className="nav-logo-container">
        <RouterLink to="/" spy={true} smooth={true} offset={-70} duration={500}>
        <img src={Logo} alt="Logo" />
        </RouterLink>
      </div>
      
      <div className="navbar-links-container">
        <RouterLink to="/" spy={true} smooth={true} offset={-70} duration={500}>Trang Chủ</RouterLink>
        <Link to="introduce" spy={true} smooth={true} offset={-70} duration={500}>Giới Thiệu</Link>
        <Link to="work" spy={true} smooth={true} offset={-70} duration={500}>Công Việc</Link>
        <div className="dropdown">
          <button onClick={handleClick} className="dropdown-button">
            Sản Phẩm
            <ExpandMoreIcon className="dropdown-arrow" />
          </button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              style: {
                marginTop: 10,
              },
            }}
          >
           <MenuItem component="a" href="phutunggam">
              Phụ tùng gầm
            </MenuItem>
            <MenuItem component="a" href="phutungmay">
              Phụ tùng máy
            </MenuItem>
            <MenuItem component="a" href="#">
              Phụ tùng thân vỏ
            </MenuItem>
            <MenuItem component="a" href="#">
              Phụ tùng điện
            </MenuItem>
            <MenuItem component="a" href="#">
              Phụ tùng điều hoà
            </MenuItem>
            <MenuItem component="a" href="#">
              Phụ tùng trợ
            </MenuItem>
            <MenuItem component="a" href="#">
              Danh sách hàng về chi tiết
            </MenuItem>
          </Menu>
        </div>
        <Link to="evaluate" spy={true} smooth={true} offset={-70} duration={500}>Đánh Giá</Link>
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>Liên Hệ</Link>
        <BsCart2 className="navbar-cart-icon" />
        <button className="primary-button" onClick={handleRegisterOpen}>Đăng Ký</button>
        <button className="primary-button" onClick={handleLoginOpen}>Đăng Nhập</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <Link to={item.to} spy={true} smooth={true} offset={-70} duration={500}>
                    <ListItemText primary={item.text} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Modal open={openLogin} onClose={handleLoginClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "#f5f5f5",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2>Đăng Nhập</h2>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Mật Khẩu"
            type="password"
            margin="normal"
            variant="outlined"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLoginClose}
          >
            Đăng Nhập
          </Button>
        </Box>
      </Modal>
      <Modal open={openRegister} onClose={handleRegisterClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "#f5f5f5",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2>Đăng Ký</h2>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Mật Khẩu"
            type="password"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Nhập Lại Mật Khẩu"
            type="password"
            margin="normal"
            variant="outlined"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleRegisterClose}
          >
            Đăng Ký
          </Button>
        </Box>
      </Modal>
    </nav>
  );
};

export default Header;
