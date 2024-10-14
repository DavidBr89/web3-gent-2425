/* eslint-disable react/prop-types */
import React from "react";

import CourseItem from "./CourseItem";

const Courses = ({ courses }) => {
  return (
    <ul>
      {courses.map((c) => (
        <CourseItem key={c} course={c} />
      ))}
    </ul>
  );
};

export default Courses;
