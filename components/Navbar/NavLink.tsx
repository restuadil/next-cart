import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ title, to }: { title: string; to: string }) => {
  const pathname = usePathname();
  return (
    <Link
      href={to}
      className={cn(
        "group relative inline-block cursor-pointer text-base font-semibold hover:text-green-500",
        pathname === to ? "text-green-500" : "text-slate-600"
      )}
    >
      {title}
      <span
        className={cn(
          "absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 transform bg-green-500 transition-all duration-500 group-hover:w-full",
          pathname === to ? "w-full" : ""
        )}
      />
    </Link>
  );
};

export default NavLink;
