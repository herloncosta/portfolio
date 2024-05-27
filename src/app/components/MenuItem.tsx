import Link from "next/link";

interface MenuItemProps {
  icon: any;
  link: string;
  text: string;
}

export const MenuItem = ({ icon, link, text }: MenuItemProps) => (
  <li>
    <Link href={link} className="p-2 flex items-end gap-2">
      <span>{icon}</span>
      <span className="text-sm">{text}</span>
    </Link>
  </li>
);
