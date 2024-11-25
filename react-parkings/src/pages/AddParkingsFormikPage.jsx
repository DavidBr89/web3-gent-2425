import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

const courses = [
  {
    id: 1,
    label: "Web 1",
    value: "web1",
  },
  {
    id: 2,
    label: "Web 2",
    value: "web2",
  },
  {
    id: 3,
    label: "Web 3",
    value: "web3",
  },
  {
    id: 4,
    label: "Mobile",
    value: "mobile",
  },
];

// Validatie schema aanmaken
const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(4).max(10),
  age: Yup.number().positive().integer().required().min(18).max(150),
  course: Yup.string()
    .oneOf(courses.map((c) => c.value))
    .required(),
  gender: Yup.string().oneOf(["male", "female"]).required(),
});

const AddParkingsFormikPage = () => {
  const { values, handleChange, handleSubmit, setFieldValue, errors } =
    useFormik({
      initialValues: {
        name: "",
        age: 0,
        course: courses[0].value,
        gender: "",
      },
      onSubmit: (values) => {
        console.log(values);
        //   POST REQUEST
        //   Axios.post("http://localhost:3000/api/parkings", values);
      },
      validationSchema: validationSchema,
    });

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Naam:</label>
        <input
          id="name"
          className="px-4 py-2 border rounded-md block"
          type="text"
          placeholder="Naam"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <p className="text-red-600">{errors.name}</p>
        <input
          name="age"
          className="px-4 py-2 border rounded-md block"
          type="number"
          placeholder="Leeftijd"
          value={values.age}
          onChange={handleChange}
        />
        {errors.age}
        <select
          name="course"
          value={values.course}
          onChange={handleChange}
          className="block px-4 py-2 border rounded-md">
          {courses.map((c) => (
            <option key={c.id} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
        <p>{errors.course}</p>

        <div>
          <input
            type="radio"
            name="gender"
            id="genderMale"
            className="block w-4 h-4"
            checked={values.gender === "male"}
            // value="male"
            onChange={() => {
              setFieldValue("gender", "male");
            }}
          />
          <label htmlFor="genderMale">Man</label>
          <input
            type="radio"
            name="gender"
            id="genderFemale"
            className="block w-4 h-4"
            checked={values.gender === "female"}
            // value="female"
            onChange={() => {
              setFieldValue("gender", "female");
            }}
          />
          <label htmlFor="genderFemale">Vrouw</label>
        </div>
        <p>{errors.gender}</p>

        <button type="submit">Verstuur</button>
      </form>
    </div>
  );
};

export default AddParkingsFormikPage;
