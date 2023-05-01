import React from 'react';
import './App.css';
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
  import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
  import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
  import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
  import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
  import Info from "@mui/icons-material/Info";
  import Code from "@mui/icons-material/Code";
  import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
function App() {
  const { collapseSidebar } = useProSidebar();
  const textColor = { color: 'white' };
  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      
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
          <MenuItem style = {textColor} icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>Project Results</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Poster</MenuItem>
          <MenuItem icon={<Code />}>Repository</MenuItem>
        </Menu>
        
      </Sidebar>
      <main>
        <h1 style={{ color: "white", marginLeft: "5rem" }}>
          React-Pro-Sidebar
        </h1>
      </main>
    </div>
  );
}

export default App;
