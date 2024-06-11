import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeTemplate from "./homeTemplate";
import "./home.css";
import { useCookies } from "react-cookie";
import Navbar from "../navbar/navbar";

const Home = () => {
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const navigate = useNavigate();
  const [cookies] = useCookies(["access_token", "role", "user_email"]);

  useEffect(() => {
    // Check if cookies are set
    if (!cookies.access_token || !cookies.user_email || !cookies.role) {
      navigate("/");
    } else {
      fetchWelcomeMessage();
    }
  }, [cookies, navigate]);

  const fetchWelcomeMessage = () => {
    setWelcomeMessage("Hello, this is your homepage!");
  };

  return (
    <div>
      <Navbar />
      <HomeTemplate welcomeMessage={welcomeMessage} />
    </div>
  );
};

export default Home;
