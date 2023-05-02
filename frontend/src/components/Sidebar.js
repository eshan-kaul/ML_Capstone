import {
    Sidebar,
    Menu,
    MenuItem,
    useProSidebar
} from 'react-pro-sidebar';
import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import Info from "@mui/icons-material/Info";
import Code from "@mui/icons-material/Code";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
const Sidebar2 = ()  => {
    const { collapseSidebar } = useProSidebar();

    return (
    <Sidebar backgroundColor= "rgb(99,0,49)" style={{ height: "100vh"}}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Nav</h2>
          </MenuItem>
          <MenuItem component={<Link to="/" />}icon={<HomeOutlinedIcon/>}>Home</MenuItem>
          <MenuItem component={<Link to="/project-results" />}icon={<ContactsOutlinedIcon />}>Project Results</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Poster</MenuItem>
          <MenuItem component={<Link to="/code" />} icon={<Code />}>Repository</MenuItem>
        </Menu>
        
      </Sidebar>
    );
    }; 
    export default Sidebar2;