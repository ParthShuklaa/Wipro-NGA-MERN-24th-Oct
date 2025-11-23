// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>404 — Not Found</h2>
      <p>Sorry, that page doesn't exist. <Link to="/">Go home</Link>.</p>
    </div>
  );
}
