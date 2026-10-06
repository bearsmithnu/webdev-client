import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Tony Stark
            </td>
            <td className="p-2">001234561S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-10-01</td>
            <td className="p-2">10:21:32</td>
          </tr>

          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Bear Smith
            </td>
            <td className="p-2">001234562S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2026-10-04</td>
            <td className="p-2">100:01:01</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Amy Dunne
            </td>
            <td className="p-2">001234563S</td>
            <td className="p-2">S101</td>
            <td className="p-2">FACULTY</td>
            <td className="p-2">2023-12-20</td>
            <td className="p-2">00:18:45</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Nick Dunne
            </td>
            <td className="p-2">001234564S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2018-05-11</td>
            <td className="p-2">37:40:15</td>
          </tr>

          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Jane Sample
            </td>
            <td className="p-2">001234565S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2026-10-04</td>
            <td className="p-2">01:01:01</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Alex Sample
            </td>
            <td className="p-2">001234566S</td>
            <td className="p-2">S101</td>
            <td className="p-2">Student</td>
            <td className="p-2">2023-12-20</td>
            <td className="p-2">00:18:45</td>
          </tr>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Sam Sample
            </td>
            <td className="p-2">001234567S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2018-05-11</td>
            <td className="p-2">37:40:15</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
