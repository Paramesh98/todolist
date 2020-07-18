import React from "react";
import "./styles.css";

export default function Alert({ type, text }) {
  return (
    <div className={`btn-${type}`}>
      <p>{text}</p>
    </div>
  );
}
