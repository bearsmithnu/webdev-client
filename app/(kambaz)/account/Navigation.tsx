"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccountContext } from "./AccountContext";

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const links = currentUser
    ? (["profile"] as const)
    : (["signin", "signup"] as const);
  const pathname = usePathname() ?? "";
  return (
    <div
      id="wd-account-navigation"
      className="wd list-group rounded-none text-lg"
    >
      {links.map((link) => (
        <span
          key={link}
          className={
            pathname.endsWith(link)
              ? "list-group-item active border-0 text-black"
              : "list-group-item border-0 text-red-600"
          }
        >
          <Link
            href={`/account/${link}`}
            className={
              pathname.endsWith(link)
                ? "text-black no-underline"
                : "text-red-600 no-underline"
            }
          >
            {link === "signin"
              ? "Signin"
              : link === "signup"
                ? "Signup"
                : "Profile"}
          </Link>
          <br />
        </span>
      ))}
    </div>
  );
}
