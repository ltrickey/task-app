/*
  Data Access Layer centralizes data requests and authorization logic.
  Per Next.js: https://nextjs.org/docs/app/guides/authentication#creating-a-data-access-layer-dal
  The DAL should include a function that verifies the user's session as they interact with your application. 
  At the very least, the function should check if the session is valid, then redirect or return the user 
  information needed to make further requests.
*/

import "server-only";

import { cache } from "react";
import { cookies } from "next/headers";
import { decrypt } from "@/app/lib/session";

//TODO do I have to remove cache here too?
export const verifySession = cache(async () => {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  if (!session || !session.userId) {
    // TODO: this doesn't work, haven't set up route
    return null;
  }

  return { isAuth: true, userId: session.userId };
});

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;
  return session.userId;
});

export const getTasks = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const res = await fetch(
      "http://localhost:4000/tasks?userId=" + session.userId
    );
    if (!res.ok) {
      // TODO RETURN
      throw new Error("Failed to fetch tasks for user");
    }

    const jsonPromises = await res.json();

    if (!jsonPromises) {
      // TODO: hanlde/return errors
      throw new Error("Failed to fetch tasks for user");
    }

    return await Promise.all(jsonPromises)
      .then((results) => {
        return results;
      })
      .catch((error) => {
        // TODO: hanlde/return errors
        console.error("Get tasks failed:", error);
      });
  } catch (error) {
    console.error(error); // from creation or business logic
  }
});
