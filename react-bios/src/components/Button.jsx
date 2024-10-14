const Button = (props) => {
  const { onClick, title, children } = props;

  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-teal-500 hover:bg-teal-300 text-white rounded-lg">
      {children}
    </button>
  );
};

export default Button;
