import Image from "next/image";

export default function AppHeader({}: {}) {
  return (
    <header className="fixed top-0 left-0 flex h-20 w-full p-4 items-center bg-white border-b-2 border-gray-200">
      <h1 className="ml-3 title-large text-primary-400">Knowledge Market</h1>
    </header>
  );
}
