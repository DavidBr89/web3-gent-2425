import CourseItem from "./CourseItem";

// CSS module -> importeer je eigenlijk JS object
import styles from "./Courses.module.css";

import Button from "./Button.jsx";
import { Button as MaterialButton } from "@mui/material";

// 1

const Courses = ({ courses }) => {
  // 2

  const handleClick = (event) => {
    console.log(event.target);

    console.log("Geklikt op de knop");
  };

  return (
    <>
      <h3 className={styles.title}>Vakken</h3>
      <ul>
        {courses.map((c) => (
          <CourseItem key={c} course={c} />
        ))}
      </ul>
      {/* <button
        className="px-4 py-2 bg-teal-500 hover:bg-teal-300 text-white rounded-lg"
        onClick={handleClick}>
        Klik mij
      </button> */}
      {courses.length ? <p>Er zijn vakken</p> : <p>Er zijn geen vakken</p>}
      {courses.length && <p>Dit is true</p>}

      <Button onClick={handleClick}>
        <div>
          <p>COURSES BTN</p>
        </div>
      </Button>

      <MaterialButton>Material button</MaterialButton>
    </>
  );
};

export default Courses;
