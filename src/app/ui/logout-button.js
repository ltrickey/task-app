"use client";
import { logout } from "../actions/auth";

export default function Logout(user) {
  if (user.user) {
    return (
      <button className="action-button" type="submit" onClick={logout}>
        Logout
      </button>
    );
  } else {
    return <></>;
  }
}
