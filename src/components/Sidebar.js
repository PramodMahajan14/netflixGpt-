import React, { createContext, useContext, useState } from "react";
import Logo from "../assets/paytrakzlogo.jpg";
import { AppContext, AppProvider } from "../context/AppProvider";

const Sidebar = () => {
  const { isSidebarOpen } = useContext(AppContext);
  const [expandSubMenu, setExpandSubMenu] = useState(false);

  return <></>;
};

export default Sidebar;
