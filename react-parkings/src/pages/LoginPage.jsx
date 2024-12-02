import React from "react";
import { useAuth } from "../contexts/AuthContext";

const LoginPage = () => {
  const { login } = useAuth();

  return (
    <div>
      <button
        onClick={() => {
          login("david.breckx@hogent.be", "Test12345");
        }}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
