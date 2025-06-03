// Sidebar.js
import React from "react";
import { X } from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            transition: "0.5s ease-in-out",
            zIndex: 9,
          }}
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: isOpen ? "0" : "-300px",
          width: "250px",
          height: "100%",
          background: "#0ea5e9",
          color: "#e0f2fe",
          padding: "1.5rem",
          boxShadow: "4px 0 10px rgba(0, 0, 0, 0.3)",
          transition: "left 0.3s ease-in-out",
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "1.5rem" }}>Menu</h2>
          <X size={24} style={{ cursor: "pointer" }} onClick={onClose} />
        </div>
        <nav style={{ marginTop: "2rem" }}>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "1rem" }}>
              <a href="#" style={{ color: "#e0f2fe", textDecoration: "none" }}>Home</a>
            </li>
            <li style={{ marginBottom: "1rem" }}>
              <a href="#" style={{ color: "#e0f2fe", textDecoration: "none" }}>Dashboard</a>
            </li>
            <li style={{ marginBottom: "1rem" }}>
              <a href="#" style={{ color: "#e0f2fe", textDecoration: "none" }}>About</a>
            </li>
            <li>
              <a href="#" style={{ color: "#e0f2fe", textDecoration: "none" }}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
