import React from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: "2rem" }}>Neoclothes</Typography>
          <Tabs textColor="inherit" value={1} indicatorColor="secondary" sx={{ paddingLeft: "5%" }}>
            <Tab label="Products">Products</Tab>
            <Tab label="Services">Services</Tab>
            <Tab label="About">About</Tab>
          </Tabs>
          <CartWidget />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default NavBar;