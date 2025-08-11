import Link from "next/link";

export default async function NavBar() {
  return (
    <nav className="site-nav container text-xl text-gray-900 leading-tight pb-5">
      <Link href="/">Task App</Link>
    </nav>
  );
}
