"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
const Navbar = () => {
  const NAVIGATION_ITEMS = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Shop",
      to: "/shop",
    },

    {
      title: "New Arrivals",
      to: "/new-arrivals",
    },
    {
      title: "Gaming",
      to: "/gaming",
    },
  ];

  const pathname = usePathname();
  if (pathname?.startsWith("/admin") || pathname?.startsWith("/auth")) {
    return null;
  }
  return (
    <nav className="fixed top-0 z-50 flex h-[60px] w-full flex-row items-center justify-between bg-transparent px-12 py-6 backdrop-blur-md transition-all duration-300">
      {/* title */}
      <Link
        href="/"
        className="group cursor-pointer text-3xl font-bold tracking-widest text-slate-600 transition-all duration-300 hover:text-green-500"
      >
        NEX
        <span className="text-green-500 transition-all duration-300 group-hover:text-slate-600">
          T
        </span>
        CAR
        <span className="text-green-500 transition-all duration-300 group-hover:text-slate-600">
          T
        </span>
      </Link>
      {/* navigation link */}
      <ul className="flex flex-row items-center justify-center gap-4">
        {NAVIGATION_ITEMS.map((nav, idx) => (
          <NavLink title={nav.title} to={nav.to} key={idx} />
        ))}
      </ul>
      {/* account */}
      <ul className="flex flex-row items-center justify-center gap-4">
        <li>Login</li>
        <li>Register</li>
      </ul>
    </nav>
  );
};

export default Navbar;
