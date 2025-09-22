import React, { useEffect, useState } from "react";
import API from "../services/api";

function HomePage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    API.get("/protected")
      .then((res) => setMessage(res.data.message))
      .catch((err) => setMessage("Access denied. Please login."));
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <p>{message}</p>
    </div>
  );
}

export default HomePage;
