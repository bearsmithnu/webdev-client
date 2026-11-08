import Link from "next/link";
import { FaFileAlt, FaTrash } from "react-icons/fa";
import { useAssignmentsStore } from "../../../store/assignmentsStore";
import { useState } from "react";
import ConfirmDeleteAssignment from "../ConfirmDelete";

export default function AssignmentItem({
  cid,
  aid,
  title,
  details,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
}) {
  const deleteAssignment = useAssignmentsStore(
    (state) => state.deleteAssignment,
  );
  const [showDeleteConfirm, setDeleteConfirm] = useState(false);

  return (
    <>
      {showDeleteConfirm &&
        <ConfirmDeleteAssignment
          close={() => setDeleteConfirm(false)}
          deleteAssn={() => deleteAssignment(aid)}
          title={title}
        />}
      <li className="wd-assignment-list-item mb-3 flex gap-3 border border-neutral-300 border-l-[3px] border-l-green-600 bg-white p-3 relative">
        <FaFileAlt className="mt-3 shrink-0 text-xl text-green-700" />
        <Link
          href={`/courses/${cid}/assignments/${aid}`}
          className="wd-assignment-link font-semibold text-neutral-900 no-underline grow"
        >
          {title}
          <div className="mt-1 text-sm font-normal text-neutral-600">
            {details}
          </div>
        </Link>
        <FaTrash
          className="cursor-pointer text-red-600 self-end mb-4"
          onClick={() => setDeleteConfirm(true)}
          title="Delete module"
        />
      </li>
    </>
  );
}
