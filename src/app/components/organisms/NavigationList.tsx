"use client";

import { usePathname } from "next/navigation";

import { RiRobot2Line } from "react-icons/ri";
import { IoLibrarySharp } from "react-icons/io5";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";

import MenuItem from "@/components/molecules/MenuItem";

export default function NavigationList({}: {}) {
  const menuItems = [
    {
      icon: <RiRobot2Line className="navigation-icon" />,
      label: "Talk with AI",
      href: "/talk-with-ai",
    },
    {
      icon: <HiOutlineChatBubbleLeftRight className="navigation-icon" />,
      label: "Group Chat",
      href: "/group-chat",
    },
    {
      icon: <IoLibrarySharp className="navigation-icon" />,
      label: "Library",
      href: "/library",
    },
  ];

  const preferenceItems = [
    {
      icon: <IoMdNotificationsOutline className="navigation-icon" />,
      label: "Notification",
      href: "/notification",
    },
    {
      icon: <IoSettingsOutline className="navigation-icon" />,
      label: "Settings",
      href: "/settings",
    },
    {
      icon: <IoIosHelpCircleOutline className="navigation-icon" />,
      label: "Help",
      href: "/help",
    },
  ];

  const pathname = usePathname();

  return (
    <nav className="fixed top-20 left-0 h-full w-64 p-4 space-y-2 border-r-2 bg-white border-gray-200">
      <ol className="space-y-2">
        <h5 className="label-large text-gray-700">MAIN MENU</h5>
        {menuItems.map((menuItem) => (
          <li key={menuItem.label}>
            <MenuItem
              icon={menuItem.icon}
              label={menuItem.label}
              href={menuItem.href}
              selected={menuItem.href === pathname}
            />
          </li>
        ))}
        <h5 className="label-large text-gray-700">PREFERENCES</h5>
        {preferenceItems.map((preferenceItem) => (
          <li key={preferenceItem.label}>
            <MenuItem
              icon={preferenceItem.icon}
              label={preferenceItem.label}
              href={preferenceItem.href}
              selected={preferenceItem.href === pathname}
            />
          </li>
        ))}
      </ol>
    </nav>
  );
}
