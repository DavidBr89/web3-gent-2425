import React from "react";
import TextInput from "../components/TextInput";

import * as Yup from "yup";
import { useFormik } from "formik";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is verplicht")
    .email("Geen geldig emailadres"),
  password: Yup.string()
    .required("Wachtwoord is verplicht")
    .min(8, "Wachtwoord moet minstens 8 karakters bevatten"),
});

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const { touched, errors, values, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: ({ email, password }) => {
        // TODO: Implementatie
      },
      validationSchema: validationSchema,
    });

  return (
    <div className="mt-4 flex flex-col gap-8">
      {/* <h1 className="text-center text-4xl font-thin uppercase">Inloggen</h1> */}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <TextInput
          error={touched.email && errors.email}
          errorlabel={touched.email && errors.email && errors.email}
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          placeholder="Email"
          value={values.email}
        />
        <TextInput
          error={touched.password && errors.password}
          errorlabel={touched.password && errors.password && errors.password}
          onChange={handleChange}
          onBlur={handleBlur}
          name="password"
          type="password"
          placeholder="Wachtwoord"
          value={values.password}
        />
        <button className="bg-black px-4 py-2 text-white rounded-lg">
          Inloggen
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
