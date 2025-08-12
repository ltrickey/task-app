/*
  app/page.js is route for home ie '/'
*/
import { redirect } from "next/navigation";
import { getUser } from "./lib/dal";
import { LoginForm } from "./ui/login-form";
import NavBar from "./components/NavBar";

export default async function Start() {
  const user = await getUser();

  if (user) {
    redirect("/list");
  } else {
    return (
      <div>
        <NavBar />
        <LoginForm />
      </div>
    );
  }
}
