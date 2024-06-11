import React from "react";
import NavbarTemplate from "./navbarTemplate";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const navigate = useNavigate();
  const [, , removeCookie] = useCookies(["access_token", "role", "user_email"]);

  const links = [
    { name: "Home", path: "/home" },
    { name: "Administration", path: "/home" },
    { name: "Moderation", path: "/home" },
    { name: "Logs", path: "/home" },
    { name: "User Logs", path: "/home" },
    { name: "Health Checks", path: "/home" },
  ];

  const brandName = "Administration Console";

  const handleLogout = () => {
    // Clear cookies
    removeCookie("user_email", { path: "/" });
    removeCookie("role", { path: "/" });
    removeCookie("access_token", { path: "/" });

    // Redirect to login page
    navigate("/");
  };

  return (
    <NavbarTemplate
      links={links}
      brandName={brandName}
      onLogout={handleLogout}
    />
  );
};

export default Navbar;
