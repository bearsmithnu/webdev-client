import { FaCheckCircle } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoArrowRedoOutline } from "react-icons/io5";
import { PiCrosshair } from "react-icons/pi";
import { MdOutlineBarChart } from "react-icons/md";
import { IoMegaphoneOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { PiRobot } from "react-icons/pi";

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <LiaFileImportSolid className="me-1 shrink-0 text-base rotate-180" />{" "}
        Import Existing Content
      </button>

      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <IoArrowRedoOutline className="me-1 shrink-0 text-base" /> Import From
        Commons
      </button>
      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <PiCrosshair className="me-1 shrink-0 text-base" /> Choose Home Page
      </button>
      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <MdOutlineBarChart className="me-1 shrink-0 text-base" /> View Course
        Stream
      </button>
      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <IoMegaphoneOutline className="me-1 shrink-0 text-base" /> New
        Announcement
      </button>
      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <MdOutlineBarChart className="me-1 shrink-0 text-base" /> New Analytics
      </button>
      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <FaRegBell className="me-1 shrink-0 text-base" /> View Course
        Notifications
      </button>
      <button id="wd-ai-status"
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <PiRobot className="me-1 shrink-0 text-base" /> Sample action
      </button>
    </div>
  );
}