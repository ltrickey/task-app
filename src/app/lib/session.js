/*
  Handles logic to encrypt, decrypt and create session info
*/

import "server-only";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

// TODO: DO NOT DEPLOY, used for development purposes only
const secretKey = "rdXJaQjfD48C66M";
//const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session) {
  if (!session) {
    return null;
  }
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log(error);
    console.log("Failed to verify session");
  }
}

/* 
  Right now only using userId for session Cookie.  
  In future, would use token the Auth0 NextJS SDK which 
  Similarly stores their token in an httpOnly cookie
*/
export async function createSession(userId) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, expiresAt });
  const cookieStore = await cookies();

  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}
