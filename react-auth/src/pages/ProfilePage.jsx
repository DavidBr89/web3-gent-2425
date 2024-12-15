import React from "react";
import TextInput from "../components/TextInput";

const ProfilePage = () => {
  return (
    <div>
      <form>
        <TextInput placeholder="Bio" />
        <button type="submit">Verstuur</button>
      </form>
    </div>
  );
};

export default ProfilePage;
