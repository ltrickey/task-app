/*
  app/page.js is route for home ie '/'
*/
import { getUser } from "./lib/dal";
import TaskList from "./list/page";
import { LoginForm } from "./ui/login-form";

export default async function Start() {
  // TODO: move this logic to layout instead
  const user = await getUser();

  return (
    <div>
      <LoginForm />
    </div>
  );
}
