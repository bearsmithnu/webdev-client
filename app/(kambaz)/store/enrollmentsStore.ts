import { create } from "zustand";
import enrollmentsJson from "../database/enrollments.json";

export type Enrollment = (typeof enrollmentsJson)[number];

type EnrollmentStore = {
    enrollments: Enrollment[];
    enroll: (details: {userId: string, cid: string}) => void;
    unenroll: (details: {userId: string, cid: string}) => void;
};

function filterEnrollments(enrolls: Enrollment[], details: {userId: string, cid: string}) {
    return enrolls.filter((e) => (e.user !== details.userId || e.course !== details.cid));
};

export const useEnrollmentStore = create<EnrollmentStore>((set) => ({
  enrollments: enrollmentsJson,
  enroll: (details) =>
    set((state) => ({
      enrollments: [...filterEnrollments(state.enrollments, details), 
            {user: details.userId, course: details.cid, _id: crypto.randomUUID()},
        ],
    })),
  unenroll: (details) =>
    set((state) => ({
      enrollments: filterEnrollments(state.enrollments, details),
    }))
}));
