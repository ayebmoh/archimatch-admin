"use client"; // Ensure client-side rendering

import NavBarAdmin from "@/components/AdminComponents/AdminLayout/NavBarAdmin";
import SideBar from "@/components/AdminComponents/AdminLayout/SideBar";

export default function AdminLayout({ children }) {

  return (
    <div className="flex sm:flex-row h-screen">
      <div>
        <SideBar />
      </div>
      <div className="flex flex-col right-0 w-screen">
        <NavBarAdmin />
        <div className="px-4 py-4">{children}</div>
      </div>
    </div>
  );
}
