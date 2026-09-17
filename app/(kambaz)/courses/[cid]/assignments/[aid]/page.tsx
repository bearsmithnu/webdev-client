export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea
        id="wd-description"
        defaultValue="The assignment is available online Submit a link to the landing page of
        your Web application running on Vercel."
      />
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">Assignments</option>
                <option value="QUIZZES">Quizzes</option>
                <option value="EXAMS">Exams</option>
                <option value="PROJECT">Project</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue="PERCENTAGE">
                <option value="PERCENTAGE">Percentage</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <div id="wd-submission-type">
                <select defaultValue="ONLINE">
                  <option value="ONLINE">Online</option>
                </select>
                <br />
                <input
                  type="checkbox"
                  name="online-submission-type"
                  id="wd-text-entry"
                />
                <label htmlFor="wd-text-entry">Text Entry</label>
                <br />

                <input
                  type="checkbox"
                  name="online-submission-type"
                  id="wd-website-url"
                />
                <label htmlFor="wd-website-url">Website URL</label>
                <br />

                <input
                  type="checkbox"
                  name="online-submission-type"
                  id="wd-media-recordings"
                />
                <label htmlFor="wd-media-recordings">Media Recordings</label>
                <br />

                <input
                  type="checkbox"
                  name="online-submission-type"
                  id="wd-student-annotation"
                />
                <label htmlFor="wd-student-annotation">
                  Student Annotation
                </label>
                <br />

                <input
                  type="checkbox"
                  name="online-submission-type"
                  id="wd-file-upload"
                />
                <label htmlFor="wd-file-upload">File Uploads</label>
              </div>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign">Assign</label>
            </td>
            <td>
              <div id="wd-assign">
                <label htmlFor="wd-assign-to">Assign To</label>
                <br />
                <input type="text" id="wd-assign-to" />
                <br />

                <label htmlFor="wd-due-date">Due</label>
                <br />
                <input type="datetime-local" id="wd-due-date" />
                <br />

                <label htmlFor="wd-available-from">Available from</label>
                <br />
                <input type="datetime-local" id="wd-available-from" />
                <br />

                <label htmlFor="wd-available-until">Until</label>
                <br />
                <input type="datetime-local" id="wd-available-until" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <a href="../">
        <button type="button" id="wd-cancel">Cancel</button>
      </a>{" "}
      <a href="../">
        <button type="button" id="wd-save">Save</button>
      </a>
    </div>
  );
}
