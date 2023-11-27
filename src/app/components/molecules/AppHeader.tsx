"use client";
import { DrawerContext } from "@/app/contexts/DrawerProvider";
import { useContext } from "react";
import { PiBookOpenText } from "react-icons/pi";

export default function AppHeader({}: {}) {
  const drawerContext = useContext(DrawerContext);

  return (
    <header className="fixed top-0 left-0 flex h-20 w-full p-4 items-center justify-between bg-white border-b-2 border-gray-200">
      <h1 className="ml-3 title-large text-primary-400">Knowledge Market</h1>
      <button onClick={drawerContext.toggleRight}>
        <PiBookOpenText className="form-icon" />
      </button>
    </header>
  );
}
