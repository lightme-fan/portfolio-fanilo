import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#F1F3F4",
        padding: "15px",
        textAlign: "center",
        marginTop: "20px"
      }}
    >
      © Created and Presented with{" "}
      <span role="img" aria-label="like">
        💙
      </span>{" "}
      by <a href="https://github.com/lightme-fan">Fanilo</a>
    </footer>
  );
}
