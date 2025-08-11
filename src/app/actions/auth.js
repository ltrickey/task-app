/* 
  Middle layer separating login API call from front end.
  This way we can connect server component with client component
*/
import { redirect } from "next/navigation";

export async function login(state, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  let loginRes;
  try {
    loginRes = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
    });

    if (!loginRes.ok) {
      // Todo: break out into user not found vs bad password
      return { errors: ["Unable to login: invalid credentials"] };
    }
  } catch (err) {
    console.log("caught error: " + err);
    return { errors: ["Something went wrong, please try again"] };
  } finally {
    if (loginRes && loginRes.ok) {
      redirect("/list");
    }
  }
}

export async function logout() {
  try {
    const logoutRes = await fetch("/logout", {
      method: "POST",
    });

    //TODO: handle error better
    if (!logoutRes.ok) {
      return {
        errors: ["Unable to logout"],
      };
    }
    //redirect("/");
  } catch (err) {
    console.log("caught error: " + err);
  } finally {
    redirect("/");
  }
}
