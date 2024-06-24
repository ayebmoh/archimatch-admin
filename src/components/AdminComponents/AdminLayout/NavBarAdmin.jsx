"use client";

import {
  Avatar,
  ChevronDownIcon,
  Cog6ToothIcon,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  PowerIcon,
  Typography
} from "@/components/RemoteComponents";
import React, { useState } from "react";

const NavBarAdmin = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    const profileMenuItems = [

      {
        label: "Edit Profile",
        icon: Cog6ToothIcon,
      },

      {
        label: "Sign Out",
        icon: PowerIcon,
      },
    ];

    return (
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <button className="  flex items-center gap-2 rounded-full py-0.5 pr-2 pl-0.5 ml-auto">
            <label className="">Admin</label>
            <Avatar
              variant="circular"
              size="sm"
              alt="Admin"
              className="hover:bg-client-primary border border-gray-900 p-0.5"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3  transition-transform ${isMenuOpen ? "rotate-180" : ""
                }`}
            />
          </button>
        </MenuHandler>
        <MenuList className="p-2">
          {profileMenuItems.map(({ label, icon }, key) => {
            const isLastItem = key === profileMenuItems.length - 1;
            return (
              <MenuItem
                key={label}
                onClick={closeMenu}
                className={`flex items-center w-[100%] gap-2 rounded ${isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
                  }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "mb-2 text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal mb-2"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    );
  }

  return (
    <nav className="shadow-md sticky">
      <div className=" p-3">
        <ProfileMenu />
      </div>
    </nav>
  );
};

export default NavBarAdmin;