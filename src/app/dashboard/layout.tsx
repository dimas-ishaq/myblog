import React from "react";
import Profile from "../components/Profile";
import { Search } from "lucide-react";
import Sidebar from "../components/dashboard/sidebar";
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="h-screen flex mx-auto gap-2">
        {/* Sidebar */}
        <Sidebar/>
        {/* End Sidebar */}

        <div className="flex flex-col flex-1 ">
          {/* Header */}
          <div className="relative top-0">
            <div className="w-full h-16 flex bg-green-900 drop-shadow rounded-b items-center justify-between ">
              <form action="" className="ml-4">
                <div className="flex flex-col relative">
                  <Search className="w-6 h-6 text-gray-600 absolute top-2 left-1.5" />
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Type here to search ..."
                    className="text-sm py-2.5 rounded-full w-80 ps-8 text-gray-700 outline-none ring-none focus:outline-green-700  focus:placeholder:text-gray-500"
                  />
                </div>
              </form>
              <div className="pr-8">
                <Profile />
              </div>
            </div>
          </div>
          {/* End Header */}
          {/* Main Content */}
          <main className="overflow-y-auto">{children}</main>
          {/* End Main Content */}
        </div>
      </div>
    </>
  );
}
