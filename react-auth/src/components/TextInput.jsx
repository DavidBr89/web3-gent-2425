import React from "react";

const TextInput = (props) => {
  return (
    <div>
      <input
        {...props}
        className={`border ${
          props.error
            ? "border-red-500 focus:outline-red-500"
            : "border-gray-200 focus:outline-black"
        } rounded-lg px-4 py-2 w-full`}
      />
      {props.error && (
        <p className="text-sm text-red-600">{props.errorlabel}</p>
      )}
    </div>
  );
};

export default TextInput;
