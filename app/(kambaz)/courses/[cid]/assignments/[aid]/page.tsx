import Link from "next/link";
import * as db from "../../../../database";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  const assignment = db.assignments.find((a) => a._id === aid);

  return (
    <>
      <div id="wd-assignments-editor" className="grid grid-cols-1 gap-4 p-5">
        <div className="grid grid-cols-1 gap-2">
          <label htmlFor="wd-name">Assignment Name</label>
          <input
            id="wd-name"
            defaultValue={assignment?.title ?? ""}
            className="rounded border border-gray-300 text-md font-light py-3 px-2 inset-shadow-xs"
          />
          <span>Assignment id: {aid}</span>
        </div>
        <textarea
          id="wd-description"
          defaultValue={assignment?.description ?? ""}
          className="text-md font-light py-3 px-2 rounded border border-gray-300 inset-shadow-xs h-30"
        />
        <div className="grid grid-cols-2 gap-4 justify-end">
          <label htmlFor="wd-points" className="flex justify-end">
            Points
          </label>
          <input
            type="number"
            id="wd-points"
            className="text-md font-light py-3 px-2 rounded border border-gray-300"
            defaultValue={assignment?.points ?? 100}
          />
          <label htmlFor="wd-group" className="flex justify-end">
            Assignment Group
          </label>
          <div>
            <select
              id="wd-group"
              defaultValue="ASSIGNMENTS"
              className="text-md font-light py-3 px-2 rounded border border-gray-300"
            >
              <option value="ASSIGNMENTS">Assignments</option>
              <option value="QUIZZES">Quizzes</option>
              <option value="EXAMS">Exams</option>
              <option value="PROJECT">Project</option>
            </select>
          </div>

          <div>
            <label htmlFor="wd-display-grade-as" className="flex justify-end">
              Display Grade
            </label>
          </div>

          <div>
            <select
              id="wd-display-grade-as"
              defaultValue="PERCENTAGE"
              className="text-md font-light py-3 px-2 rounded border border-gray-300"
            >
              <option value="PERCENTAGE">Percentage</option>
            </select>
          </div>

          <div>
            <label htmlFor="wd-submission-type" className="flex justify-end">
              Submission Type
            </label>
          </div>
          <div
            id="wd-submission-type"
            className="rounded border border-gray-300 p-3 grid grid-cols-1 gap-3"
          >
            <select
              defaultValue="ONLINE"
              className="text-md font-light py-3 px-2 rounded border border-gray-300"
            >
              <option value="ONLINE">Online</option>
            </select>

            <span className="font-bold">Online Entry Options</span>

            <div>
              <input
                type="checkbox"
                name="online-submission-type"
                id="wd-text-entry"
              />
              <label htmlFor="wd-text-entry">Text Entry</label>
            </div>

            <div>
              <input
                type="checkbox"
                name="online-submission-type"
                id="wd-website-url"
              />
              <label htmlFor="wd-website-url">Website URL</label>
            </div>

            <div>
              <input
                type="checkbox"
                name="online-submission-type"
                id="wd-media-recordings"
              />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
            </div>

            <div>
              <input
                type="checkbox"
                name="online-submission-type"
                id="wd-student-annotation"
              />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
            </div>

            <div>
              <input
                type="checkbox"
                name="online-submission-type"
                id="wd-file-upload"
              />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </div>
          </div>

          <div className="flex justify-end">
            <label htmlFor="wd-assign">Assign</label>
          </div>
          <div id="wd-assign" className="rounded border border-gray-300 p-3">
            <label htmlFor="wd-assign-to" className="font-bold">
              Assign To
            </label>
            <br />
            <input
              type="text"
              id="wd-assign-to"
              className="text-md font-light py-3 px-2 rounded border border-gray-300"
            />
            <br />

            <label htmlFor="wd-due-date" className="font-bold">
              Due
            </label>
            <br />
            <input
              type="date"
              id="wd-due-date"
              defaultValue={assignment?.due}
              className="text-md font-light py-3 px-2 rounded border border-gray-300"
            />
            <br />

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="wd-available-from" className="font-bold">
                  Available from
                </label>
                <br />
                <input
                  type="date"
                  id="wd-available-from"
                  defaultValue={assignment?.available}
                  className="text-md font-light py-3 px-2 rounded border border-gray-300"
                />
              </div>

              <div>
                <label htmlFor="wd-available-until" className="font-bold">
                  Until
                </label>
                <br />
                <input
                  type="date"
                  id="wd-available-until"
                  className="text-md font-light py-3 px-2 rounded border border-gray-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="wd-ai-editor-notes">Sample notes</label>
        <textarea
          id="wd-ai-editor-notes"
          placeholder="Take some notes here."
          className="text-md font-light py-3 px-2 rounded border border-gray-300 inset-shadow-xs h-30"
        />
      </div>

      <hr />
      <div className="flex justify-end gap-2">
        <Link href="./">
          <button
            type="button"
            id="wd-cancel"
            className="rounded border border-gray-300 px-3 py-1.5 text-sm"
          >
            Cancel
          </button>
        </Link>{" "}
        <Link href="./">
          <button
            type="button"
            id="wd-save"
            className="rounded border border-gray-300 bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
          >
            Save
          </button>
        </Link>
      </div>
    </>
  );
}
