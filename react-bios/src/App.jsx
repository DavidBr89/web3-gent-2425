// Enkel naam komt vanuit een dependency of third party package

// import CourseItem from "./components/CourseItem";
import Courses from "./components/Courses";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

const subTitle = "Vak over React en Node.js";
const { fName, lName } = {
  fName: "David",
  lName: "Breckx",
};

const courses = ["Web 1", "Web 2", "Web 3", "Mobile"];

function App() {
  return (
    <>
      <h1 className="title">Web 3</h1>
      <h3>{subTitle}</h3>
      <p>{`Voornaam: ${fName}, Achternaam: ${lName}`}</p>

      <Counter />

      <Button
        // title="APP BTN"
        onClick={() => {
          alert("Dit is een alert");
        }}>
        APP BTN
      </Button>

      <Courses courses={courses} />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        blanditiis eum natus a quam, corporis magni delectus autem rem
        consectetur ad suscipit. Cum mollitia quas ut enim molestias, dicta
        eligendi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        blanditiis eum natus a quam, corporis magni delectus autem rem
        consectetur ad suscipit. Cum mollitia quas ut enim molestias, dicta
        eligendi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        blanditiis eum natus a quam, corporis magni delectus autem rem
        consectetur ad suscipit. Cum mollitia quas ut enim molestias, dicta
        eligendi.
      </p>
    </>
  );
}

export default App;
