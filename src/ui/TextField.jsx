function TextField({ label, value, onChnage, name }) {
  return (
    <div>
      <label className="mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChnage}
        id={name}
        name={name}
        className="textField__input"
        type="text"
        autoComplete="off"
      />
    </div>
  );
}

export default TextField;
