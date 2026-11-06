"use client";

import { useState } from "react";

export default function BooleanStateVariables() {
  const [done, setDone] = useState(true);
  const [danger, setDanger] = useState(false);
  const [saved, setSaved] = useState(false);
  return (
    <div id="wd-boolean-state-variables">
      <h2>Boolean State Variables</h2>
      <p>{done ? "Done" : "Not done"}</p>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={done}
          onChange={() => setDone(!done)}
          id="wd-boolean-checkbox"
        />
        Done
      </label>
      {done && <div className="mt-2 rounded bg-yellow-100 p-2">Yay! Done</div>}
      <br />
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={danger}
          onChange={() => setDanger(!danger)}
          id="wd-boolean-checkbox-2"
        />
        Danger
      </label>
      {danger && <div className="mt-2 rounded bg-red-100 p-2">WATCH OUT</div>}
      <br />
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={saved}
          onChange={() => setSaved(!saved)}
          id="wd-boolean-saved"
        />
        Save
      </label>
      {saved && <div>Saved</div>}
      <hr />
    </div>
  );
}
