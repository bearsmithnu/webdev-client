export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td align="center">HTML</td>
            <td align="center">2/3/21</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td align="center">CSS</td>
            <td align="center">2/10/21</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">2/17/21</td>
            <td align="right">95</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">90</td>
          </tr>
        </tfoot>
      </table>

      <h4>My Schedule</h4>
      <table border={1} width="100%" id="wd-your-table">
        <thead>
          <tr>
            <th align="center">Department</th>
            <th align="center">Number</th>
            <th align="center">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="center">ENGW</td>
            <td align="center">3315</td>
            <td align="center">Advanced writing requirement, seems like the focus will be writing for an
                 audience</td>
          </tr>
          <tr>
            <td align="center">CS</td>
            <td align="center">3200</td>
            <td align="center">SQL class</td>
          </tr>
          <tr>
            <td align="center">CS</td>
            <td align="center">4220</td>
            <td align="center">How search engines work, which is also how AI works</td>
          </tr>
          <tr>
            <td align="center">CS</td>
            <td align="center">4550</td>
            <td align="center">They&apos;re making me write HTML tables</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
