export default function YourForm() {
  return (
    <form id="wd-your-form">
      <h4>Student Profile</h4>

      <label htmlFor="name-first">First Name</label>
      <input type="text" id="name-first" placeholder="Robert" />
      <br />

      <label htmlFor="name-last">Last Name</label>
      <input type="text" id="name-Last" placeholder="Paulsen" />
      <br />

      <label htmlFor="husky-id">Husky ID</label>
      <input type="text" id="husky-id" placeholder="000000001" />
      <br />

      <label htmlFor="bio">Biography</label>
      <br />
      <textarea rows={4} cols={50} id="bio" placeholder="..." />
      <br />

      <h5>Class Year</h5>
      <label>
        <input type="radio" name="class-year" id="1" />
        Freshman
      </label>
      <br />
      <label>
        <input type="radio" name="class-year" id="2" />
        Sophomore
      </label>
      <br />
      <label>
        <input type="radio" name="class-year" id="3" />
        Junior
      </label>
      <br />
      <label>
        <input type="radio" name="class-year" id="4" />
        Senior
      </label>
      <br />
      <label>
        <input type="radio" name="class-year" id="5" />
        5th year
      </label>

      <h5>Major Type</h5>
      <label>
        <input type="radio" name="major-type" id="single" />
        Single, no minor
      </label>
      <br />
      <label>
        <input type="radio" name="major-type" id="single-minor" />
        Single, with minor
      </label>
      <br />
      <label>
        <input type="radio" name="major-type" id="combined" />
        Combined
      </label>
      <br />
      <label>
        <input type="radio" name="major-type" id="double" />
        Double
      </label>

      <h5>Co-op Interests</h5>
      <label>
        <input type="checkbox" name="co-op-int" id="full" />
        Full-time
      </label>
      <br />
      <label>
        <input type="checkbox" name="co-op-int" id="part" />
        Part-time
      </label>
      <br />
      <label>
        <input type="checkbox" name="co-op-int" id="industry" />
        Industry
      </label>
      <br />
      <label>
        <input type="checkbox" name="co-op-int" id="research" />
        Research
      </label>
      <br />
      <label>
        <input type="checkbox" name="co-op-int" id="start-ups" />
        Start-ups
      </label>

      <h5>Co-op Locations</h5>
      <label>
        <input type="checkbox" name="co-op-loc" id="boston" />
        Boston only
      </label>
      <br />
      <label>
        <input type="checkbox" name="co-op-loc" id="ma" />
        Massachusetts
      </label>
      <br />
      <label>
        <input type="checkbox" name="co-op-loc" id="ne" />
        Northeast states
      </label>
      <br />
      <label>
        <input type="checkbox" name="co-op-loc" id="us" />
        USA- Any state
      </label>
      <br />
      <label>
        <input type="checkbox" name="co-op-loc" id="intl" />
        International
      </label>

      <h5>College</h5>
      <select defaultValue="none">
        <option value="Bouve">Bouv&eacute;</option>
        <option value="CAMD">CAMD</option>
        <option value="Eng">CoE</option>
        <option value="CPS">CPS</option>
        <option value="Sci">CoS</option>
        <option value="Soc">CSSH</option>
        <option value="Bus">D&apos;amore McKim</option>
        <option value="Kho">Khoury</option>
        <option value="Mil">Mills</option>
        <option value="Law">SoL</option>
        <option value="none"></option>
      </select>

      <br />
      <label htmlFor="email">Student Email </label>
      <input type="email" id="email" defaultValue="husky@northeastern.edu" />
      <br />
      <label htmlFor="grad-year">Graduation Year </label>
      <input type="number" id="grad-year" min="2026" max="2031" />
      <br />
      <label htmlFor="bday">Birthday </label>
      <input type="date" id="bday" />
      <br />
      <label htmlFor="yay">Excitement for Web Development</label>
      <br />
      <label>
        0
        <input type="range" id="yay" min={0} max={5} defaultValue={4} />5
      </label>

      <br />
      <button id="save" type="submit">Save</button>
      <button id="cancel" type="button">Cancel</button>
    </form>
  );
}
