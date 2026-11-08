"use client";
import { useParams } from "next/navigation";
import AssignmentEditor from "../AssignmentEditor";

export default function AssignmentPage() {
  const { aid } = useParams();
  return (
    <AssignmentEditor id={aid + ""} returnLink="./"/>
  );
}
