import React from "react";
import TaskHead from "./TaskHead";

export default function Task({ title }) {
  return (
    <>
      <TaskHead title={title} />
    </>
  );
}
