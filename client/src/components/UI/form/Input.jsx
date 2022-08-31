const Input = (props) => {
  const { type, name, id, placeholder } = props;

  const valueChangeHandler = (e) => {
    const { name, value } = e.target;
    props.onChange(name, value);
  };

  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={valueChangeHandler}
      className="bg-dark-white py-2 px-3 rounded-md"
    />
  );
};

export default Input;
