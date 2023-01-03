import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";

export default function Dashboard() {
  let navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/dashboard");
    }

    if (!authToken) {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };
  return (
    <div>
      Dashboard
      <Button variant="contained" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}
