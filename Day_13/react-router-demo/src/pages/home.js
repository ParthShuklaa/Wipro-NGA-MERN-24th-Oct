// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome! Try the About page or a dynamic User page:</p>
      <Link to="/user/7">Go to user 7</Link>
    </div>
  );
}
