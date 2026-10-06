"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { GrBook } from "react-icons/gr";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuInbox } from "react-icons/lu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/labs/lab2/tailwind/utilities.css";

export default function KambazNavigation() {
  const pathname = usePathname() ?? "";
  const account = "/account";
  const dashboard = "/dashboard";
  const courses = "/courses";
  const calendar = "/calendar";
  const inbox = "/inbox";
  const labs = "/labs";
  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block"
    >
      <Link href="https://northeastern.edu" className="block py-3">
        <img src="/images/NEU.png" height="120px" alt="northeastern.edu" />
      </Link>
      <Link
        href={account}
        id="wd-account-link"
        className={
          pathname === account || pathname.startsWith(account + "/")
            ? "block bg-white py-3 text-center text-sm text-red-600 no-underline"
            : "block bg-black py-3 text-center text-sm text-white no-underline"
        }
      >
        <FaRegCircleUser className="inline-block text-3xl text-red-500" />
        <br />
        Account
      </Link>
      <Link
        href={dashboard}
        id="wd-dashboard-link"
        className={
          pathname === dashboard
            ? "block bg-white py-3 text-center text-sm text-red-600 no-underline"
            : "block bg-black py-3 text-center text-sm text-white no-underline"
        }
      >
        <AiOutlineDashboard className="inline-block text-3xl text-red-600" />
        <br />
        Dashboard
      </Link>

      <Link
        href="/dashboard"
        id="wd-courses-link"
        className={
          pathname.startsWith(courses + "/")
            ? "block bg-white py-3 text-center text-sm text-red-600 no-underline"
            : "block bg-black py-3 text-center text-sm text-white no-underline"
        }
      >
        <GrBook className="inline-block text-2xl text-red-500" />
        <br />
        Courses
      </Link>
      <Link
        href={calendar}
        id="wd-calendar-link"
        className={
          pathname === calendar
            ? "block bg-white py-3 text-center text-sm text-red-600 no-underline"
            : "block bg-black py-3 text-center text-sm text-white no-underline"
        }
      >
        <BiCalendar className="inline-block text-3xl text-red-500" />
        <br />
        Calendar
      </Link>
      <Link
        href={inbox}
        id="wd-inbox-link"
        className={
          pathname === inbox
            ? "block bg-white py-3 text-center text-sm text-red-600 no-underline"
            : "block bg-black py-3 text-center text-sm text-white no-underline"
        }
      >
        <LuInbox className="inline-block text-3xl text-red-500" />
        <br />
        Inbox
      </Link>
      <Link
        href={labs}
        id="wd-ai-nav-help"
        className={
          pathname === labs
            ? "block bg-white py-3 text-center text-sm text-red-600 no-underline"
            : "block bg-black py-3 text-center text-sm text-white no-underline"
        }
      >
        <FaRegCircleQuestion className="inline-block text-2xl text-red-500 " />
        <br />
        Labs
      </Link>
    </nav>
  );
}
