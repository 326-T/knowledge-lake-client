"use client";
import { DrawerContext } from "@/app/contexts/DrawerProvider";
import { useContext } from "react";

export default function DrawerRight() {
  const drawerContext = useContext(DrawerContext);

  return (
    <>
      {drawerContext.state.right.open && (
        <div className="fixed top-20 right-0 h-full w-96 p-4 space-y-2 border-l-2 bg-white border-gray-200">
          {drawerContext.state.right.component}
        </div>
      )}
    </>
  );
}
