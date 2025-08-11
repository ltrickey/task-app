"use client";
import { logout } from "../actions/auth";

export default function Logout() {
  return (
    <button className="action-button" type="submit" onClick={logout}>
      Logout
    </button>
  );
}
