import React, { useState } from "react";

const Password = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{ position: "relative", width: "fit-content" }}>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        style={{ paddingRight: "30px" }}
      />
      <span
        onClick={togglePasswordVisibility}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
      >
        {showPassword ? "👁️" : "🙈"}
      </span>
    </div>
  );
};

export default Password;
