const CourseItem = ({ course }) => {
  return (
    <li
      // style={{
      //   backgroundColor: "red",
      // }}
      className="p-4 font-black underline">
      {course}
    </li>
  );
};

export default CourseItem;
