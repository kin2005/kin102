// navigation/AuthContext.js
import React from "react";

// สร้าง Context สำหรับแชร์ข้อมูลล็อกอิน
export const AuthContext = React.createContext({
  user: null,
  signIn: (email) => {},
  signOut: () => {},
});
