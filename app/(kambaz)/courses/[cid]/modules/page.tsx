import Module from "./Module";
import Lesson from "./Lesson";

export default function Modules() {
  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          Collapse All
        </button>
        <button
          type="button"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          View Progress
        </button>
        <select
          defaultValue="publish-all"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          <option value="publish-all">Publish All</option>
        </select>
        <button
          type="button"
          className="rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          + Module
        </button>
      </div>

      <ul id="wd-modules">
        <Module title="Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">Introduction to the course</li>
            <li className="wd-content-item">Learn what is Web Development</li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Full Stack Developer - Chapter 1 - Introduction
            </li>
            <li className="wd-content-item">
              Full Stack Developer - Chapter 2 - Creating User Interfaces
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">Introduction to Web Development</li>
            <li className="wd-content-item">
              Creating an HTTP server with Node.js
            </li>
            <li className="wd-content-item">Creating a React Application</li>
          </Lesson>
        </Module>
        <Module title="Week 2">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">What is a eukaryote?</li>
            <li className="wd-content-item">Diatoms</li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              <a href="https://en.wikipedia.org/wiki/Diatom">
                Diatom - Wikipedia
              </a>
            </li>
          </Lesson>
        </Module>
        <Module title="Week 3">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">Introduction to Providence, RI</li>
            <li className="wd-content-item">Providence, RI pt. II</li>
            <li className="wd-content-item">The Jewelry District</li>
          </Lesson>
        </Module>
        <Module title="Weird 4">
          <Lesson title="Extraction of peanut proteins">
            <li className="wd-content-item">
              <a href="https://www.sciencedirect.com/science/article/pii/S2590259823000183">
                Reading: Extraction process
              </a>
            </li>
            <li className="wd-content-item">
              Pure peanut powder tastes awful, though.
            </li>
            <li className="wd-content-item">
              You wouldn&apos;t think it, but something like PB2 that retains a
              small amount of its oil tastes LEAGUES better than a completely
              defatted peanut powder.
            </li>
          </Lesson>
        </Module>
        <Module title="Sample module (AI)">
          <Lesson title="Sample lesson (AI)">
            <li className="wd-content-item">Beep</li>
            <li className="wd-content-item">Boop</li>
          </Lesson>
        </Module>
      </ul>
    </div>
  );
}
