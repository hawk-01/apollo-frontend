import React, { useState } from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";
// import Login from "../pages/Login";
// import Register from "../pages/Register";


const { SubMenu } = Menu;

function Navbar() {
  const [current, setCurrent] = useState("mail");

  const handleClick = ({ key }) => {
    console.log("click ", key);
    setCurrent(key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" theme='dark'>


      <Menu.Item key="Home">
      <Link to ="/">
      <Icon type="home" />
      Home
      </Link>
      </Menu.Item>

      <Menu.Item key="app">
      <Link to ="/login">
        <Icon type="appstore" />
        Navigation Two
      </Link>
      </Menu.Item>
    </Menu>
  );
}
export default Navbar;
