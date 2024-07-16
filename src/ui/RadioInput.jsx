function RadioInput({
  name,
  id,
  value,
  label,
  register,
  watch,
  validationSchema,
}) {
  return (
    <div className="flex justify-center items-center gap-x-2 text-secondary-600">
      <input
        className="cursor-pointer w-4 h-4 form-radio text-primary-900 focus:ring-pritext-primary-900"
        type="radio"
        name={name}
        id={id}
        value={value}
        {...register(name, validationSchema)}
        checked={watch(name) === value}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default RadioInput;
