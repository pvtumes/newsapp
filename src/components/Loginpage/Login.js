import React from "react";

const Login = ({ onLogin }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(to right, #4A90E2, #D4145A)",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
          width: "100%",
          maxWidth: "700px", // Increased size
          maxheight: "500px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
            fontSize: "40px", // Bigger text
            fontWeight: "bold",
          }}
        >
          Login
        </h2>
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              color: "#333",
              marginBottom: "8px",
              fontSize: "25px",
            }} // Larger font
          >
            Username
          </label>
          <input
            type="text"
            placeholder="Type your username"
            style={{
              width: "100%",
              padding: "15px", // Increased padding
              border: "2px solid #ccc",
              borderRadius: "8px",
              fontSize: "20px", // Bigger text
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              color: "#333",
              marginBottom: "8px",
              fontSize: "25px",
            }}
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Type your password"
            style={{
              width: "100%",
              padding: "15px",
              border: "2px solid #ccc",
              borderRadius: "8px",
              fontSize: "20px",
            }}
          />
        </div>
        <button
          onClick={onLogin}
          style={{
            width: "100%",
            padding: "15px", // Larger button
            background: "linear-gradient(to right, #4A90E2, #D4145A)",
            color: "white",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "25px", // Bigger text
            fontWeight: "bold",
          }}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;
