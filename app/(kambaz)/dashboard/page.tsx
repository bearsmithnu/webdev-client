"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";
import { useAccountContext } from "../account/AccountContext";
import { useEnrollmentStore } from "../store/enrollmentsStore";

export default function Dashboard() {
  const { currentUser } = useAccountContext();

  const courses = useCoursesStore((state) => state.courses);
  const enrollments = useEnrollmentStore((state) => state.enrollments);
  const myCourses = courses.filter((c) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === currentUser?._id && enrollment.course === c._id,
    ),
  );

  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const [editCourse, setEditCourse] = useState<Course>(emptyCourse);

  const [seeAllCourses, toggleAllCourses] = useState(false);
  const visibleCourses = currentUser && !seeAllCourses ? myCourses : courses;

  return (
    <div id="wd-dashboard">
      <div className="flex grid-cols-2 justify-between">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white self-center"
          onClick={() => toggleAllCourses(!seeAllCourses)}
          id="wd-enrollments-toggle"
        >
          {seeAllCourses ? "Show my courses" : "Show all courses"}
        </button>
      </div>
      <hr />
      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-add-new-course-click"
          onClick={() => addCourse(editCourse)}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={() => updateCourse(editCourse)}
        >
          Update
        </button>
      </h5>
      <input
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={editCourse.name}
        onChange={(e) => setEditCourse({ ...editCourse, name: e.target.value })}
        id="wd-course-name"
      />
      <textarea
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        rows={3}
        value={editCourse.description}
        onChange={(e) =>
          setEditCourse({ ...editCourse, description: e.target.value })
        }
        id="wd-course-description"
      />
      <input
        type="text"
        value={editCourse.number}
        onChange={(e) =>
          setEditCourse({ ...editCourse, number: e.target.value })
        }
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        id="wd-course-number"
      />
      <label>
        Starts:{" "}
        <input
          type="date"
          value={editCourse.startDate}
          onChange={(e) =>
            setEditCourse({ ...editCourse, startDate: e.target.value })
          }
          className="mb-2 mt-2 inline max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        />
      </label>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({visibleCourses.length})</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {visibleCourses.map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            onEdit={() => setEditCourse(c)}
          />
        ))}
      </div>
    </div>
  );
}
