import Link from "next/link";
import { getUser } from "../lib/dal";
import Logout from "../ui/logout-button";

export default async function NavBar() {
  const user = await getUser();
  return (
    <nav className="site-nav container text-xl text-gray-900 leading-tight pb-5">
      <Link className="text-[#1447e6] font-bold" href="/">
        &#10003; Task App
      </Link>
      <Logout user={user} />
    </nav>
  );
}
