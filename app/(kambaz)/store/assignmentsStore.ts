import { create } from "zustand";
import assignmentsJson from "../database/assignments.json";

export type Assignment = (typeof assignmentsJson)[number];


type AssignmentsStore = {
    assignments: Assignment[];
    addAssignment: (newAssn: Assignment) => void;
    deleteAssignment: (id: string) => void;
    updateAssignment: (edited: Assignment) => void;
};

export const useAssignmentsStore = create<AssignmentsStore>((set) => ({
  assignments: assignmentsJson,
  addAssignment: (newAssn) =>
    set((state) => ({
      assignments: [
        ...state.assignments,
        { ...newAssn, _id: crypto.randomUUID() },
      ],
    })),
  deleteAssignment: (id) =>
    set((state) => ({
      assignments: state.assignments.filter((assn) => assn._id !== id),
    })),
  updateAssignment: (edited) => 
    set((state) => ({
      assignments: state.assignments.map((assn) => (assn._id === edited._id ? edited : assn)),
    }))
}));
