import React, { useContext } from "react";
import { usercontext } from "./Createcontext";

function Subject() {
  const sub = useContext(usercontext); // 🔥 Get value from context

  return (
    <div style={{ padding: "10px", backgroundColor: "red" }}>
      <h1>Subject Component: {sub}</h1>
    </div>
  );
}

export default Subject;
