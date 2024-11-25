import React, { useState } from "react";

const AddParkingsPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <div className="p-4">
      <form
        method="GET"
        onSubmit={(event) => {
          fetch("http://localhost:3000/api/parking", {
            method: "POST",
            body: JSON.stringify({
              name: name,
              age: age,
            }),
          });
          event.preventDefault();
        }}>
        <label htmlFor="firstName">Naam:</label>
        <input
          id="firstName"
          className="px-4 py-2 border rounded-md block"
          type="text"
          placeholder="Naam"
          required
          name="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          name="age"
          className="px-4 py-2 border rounded-md block"
          type="number"
          placeholder="Leeftijd"
          value={age}
          onChange={(event) => setAge(event.target.valueAsNumber)}
        />
        <button type="submit">Verstuur</button>
      </form>
    </div>
  );
};

export default AddParkingsPage;
