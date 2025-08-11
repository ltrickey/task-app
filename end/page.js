/*
  app/page.js is route for home ie '/'
*/
import { logout } from "../actions/auth";

export default async function End() {
  // TODO: move this logic to layout instead
  await logout();
}
