export default function MenuItem({
  icon,
  label,
  href,
  selected,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  selected?: boolean;
}) {
  return selected ? (
    <a
      href={href}
      className="flex items-center p-4 rounded-lg bg-primary-400 text-white"
    >
      {icon}
      <h2 className="ml-4 title-medium">{label}</h2>
    </a>
  ) : (
    <a
      href={href}
      className="flex items-center p-4 rounded-lg text-gray-700 hover:bg-primary-300 hover:text-white"
    >
      {icon}
      <h2 className="ml-4 title-medium">{label}</h2>
    </a>
  );
}
