'use client'
import {
  SquareArrowOutDownLeft,
  Rss,
  BookOpenText,
  LayoutDashboard,
  Pencil,
} from "lucide-react";
import Link from "next/link";
import { signout } from "@/app/actions/auth";
import { usePathname } from "next/navigation";
import PostDropdown from "./PostDropdown";
export default function Sidebar() {
  const dashboardLinks = [
    { href: "/dashboard", text: "Dashboard", icon: <LayoutDashboard /> },
    {
      href: "/dashboard/start-writing",
      text: "Start Writing",
      icon: <Pencil />,
    },
    { href: "/dashboard/myblog", text: "MyBlog", icon: <BookOpenText /> },
  ];
  const activeLink = usePathname();
  return (
    <aside className="h-screen flex-none w-48">
      <div className="h-full pt-4 flex flex-col  bg-green-900">
        <Rss color="white" className="mx-auto mb-8" width={48} height={48} />
        <div className="w-44 mx-auto">
          <ul className="flex flex-col items-start gap-y-3 justify-cente">
            {dashboardLinks.map((link) => (
              <li
                key={link.href}
                className="w-full font-normal text-sm items-center text-white rounded hover:bg-green-300 hover:text-gray-800 active:bg-green-500 "
              >
                <Link
                  href={link.href}
                  className={`px-3 py-1.5 flex items-center gap-3 font-medium rounded  ${
                    activeLink === link.href ? "bg-green-300 text-gray-800" : ""
                  }`}
                >
                  {link.icon}
                  {link.text}
                </Link>
              </li>
            ))}
            <li >
             <PostDropdown />
            </li>
            <li className="font-normal text-sm items-center text-white rounded hover:bg-green-300 w-full hover:text-gray-800">
              <button
                onClick={signout}
                className="py-1.5 px-3 flex items-center gap-3 font-meidum rounded"
              >
                <SquareArrowOutDownLeft />
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
