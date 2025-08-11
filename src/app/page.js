/*
  app/page.js is route for home ie '/'
*/
import { redirect } from "next/navigation";
import { getUser } from "./lib/dal";
import { LoginForm } from "./ui/login-form";

export default async function Start() {
  // TODO: move this logic to layout instead
  const user = await getUser();

  if (user) {
    redirect("/list");
  } else {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}
