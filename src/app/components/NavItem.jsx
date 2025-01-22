"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Use this hook in the app directory

export default function NavItem({ path, itemName }) {
  const currentPath = usePathname(); // Get the current path

  return (
    <Link href={path}>
      <span
        className={`${currentPath === path ? "text-yellow-400" : "text-white"}`}
      >
        {itemName}
      </span>
    </Link>
  );
}
