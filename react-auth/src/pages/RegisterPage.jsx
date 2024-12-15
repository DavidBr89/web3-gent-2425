import React from "react";
import TextInput from "../components/TextInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Voornaam is verplicht"),
  lastName: Yup.string().required("Achternaam is verplicht"),
  email: Yup.string()
    .required("Email is verplicht")
    .email("Geen geldig email adres"),
  password: Yup.string()
    .required("Wachtwoord is verplicht")
    .min(8, "Wachtwoord moet uit minstens 8 karakters bestaan"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Wachtwoorden komen niet overeen")
    .required("Wachtwoord bevestiging verplicht"),
});

const RegisterPage = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const { touched, errors, values, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit: ({ email, firstName, lastName, password }) => {
        // TODO: Implementatie
      },
      validationSchema: validationSchema,
    });

  return (
    <div className="mt-4 flex flex-col gap-8">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <TextInput
          name="firstName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
          error={touched.firstName && errors.firstName}
          errorlabel={touched.firstName && errors.firstName}
          placeholder="Voornaam"
        />
        <TextInput
          name="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
          error={touched.lastName && errors.lastName}
          errorlabel={touched.lastName && errors.lastName}
          placeholder="Achternaam"
        />
        <TextInput
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          error={touched.email && errors.email}
          errorlabel={touched.email && errors.email}
          placeholder="Email"
        />
        <TextInput
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          error={touched.password && errors.password}
          errorlabel={touched.password && errors.password}
          placeholder="Wachtwoord"
          type="password"
        />
        <TextInput
          name="confirmPassword"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.confirmPassword}
          error={touched.confirmPassword && errors.confirmPassword}
          errorlabel={touched.confirmPassword && errors.confirmPassword}
          placeholder="Bevestiging wachtwoord"
          type="password"
        />
        <button className="bg-black hover:bg-neutral-800 px-4 py-2 text-white rounded-lg">
          Registreren
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
