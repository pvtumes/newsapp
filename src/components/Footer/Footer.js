import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#2C3036",
        color: "#ffffff",
        padding: "40px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <div style={{ minWidth: "250px", margin: "10px" }}>
        <h4
          style={{
            fontSize: "23px",
            fontWeight: "bold",
            textTransform: "uppercase",
            marginBottom: "10px",
            color: "#ffffff",
          }}
        >
          The Daily Wire | News. Opinion. Entertainment.
        </h4>
        <p style={{ fontSize: "17px", lineHeight: "1.6", color: "#cccccc" }}>
          Your source for breaking news, in-depth analysis, and cultural
          commentary. We deliver honest journalism with bold perspectives.
        </p>
        <p
          style={{
            fontWeight: "bold",
            marginTop: "10px",
            fontSize: "17px",
            color: "#ffffff",
          }}
        >
          Contact Us:
        </p>
        <a
          href="mailto:info@dailywire.com"
          style={{ fontSize: "17px", textDecoration: "none", color: "#ffcc00" }}
        >
          info@dailywire.com
        </a>
      </div>
      <div style={{ minWidth: "250px", margin: "10px" }}>
        <h4
          style={{
            fontSize: "23px",
            fontWeight: "bold",
            textTransform: "uppercase",
            marginBottom: "10px",
            color: "#ffffff",
          }}
        >
          Quick Links
        </h4>
        {[
          "About Us",
          "News",
          "Podcasts",
          "Shop",
          "Careers",
          "Advertise",
          "Privacy Policy",
          "Terms of Service",
        ].map((link) => (
          <a
            key={link}
            href="#"
            style={{
              display: "block",
              fontSize: "17px",
              margin: "5px 0",
              textDecoration: "none",
              color: "#ffcc00",
            }}
          >
            {link}
          </a>
        ))}
      </div>
      <div style={{ minWidth: "250px", margin: "10px" }}>
        <h4
          style={{
            fontSize: "23px",
            fontWeight: "bold",
            textTransform: "uppercase",
            marginBottom: "10px",
            color: "#ffffff",
          }}
        >
          Stay in Touch
        </h4>
        <p style={{ fontSize: "17px", color: "#cccccc" }}>
          Subscribe to receive updates, access to exclusive content, and more.
        </p>
        <input
          type="email"
          placeholder="Enter your email address"
          style={{
            width: "80%",
            padding: "8px",
            marginTop: "10px",
            border: "1px solid #555",
            borderRadius: "4px",
            backgroundColor: "#444",
            color: "#ffffff",
          }}
        />
        <button
          style={{
            backgroundColor: "#ffcc00",
            color: "#000",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Subscribe
        </button>
      </div>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          padding: "10px",
          fontSize: "17px",
          color: "#cccccc",
        }}
      >
        &copy; The Daily Wire |{" "}
        <a href="#" style={{ textDecoration: "none", color: "#ffcc00" }}>
          Terms of Service
        </a>{" "}
        |{" "}
        <a href="#" style={{ textDecoration: "none", color: "#ffcc00" }}>
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Footer;
