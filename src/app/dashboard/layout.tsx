
import React from "react";
import Profile from "../components/Profile";
import Sidebar from "../components/dashboard/Sidebar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <div className="h-screen flex mx-auto gap-2">
          {/* Sidebar */}
          <Sidebar />
          {/* End Sidebar */}

          <div className="flex flex-col flex-1 ">
            {/* Header */}
            <div className="relative top-0">
              <div className="w-full h-16 flex bg-green-900 drop-shadow rounded-b items-center justify-end pr-4 ">
                  <Profile  />
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
