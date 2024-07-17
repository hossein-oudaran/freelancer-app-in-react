import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import RHFSelect from "../../ui/RHFSelect";
import { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../ui/DatePickerField";

function CreatProjectForm() {
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان پروژه"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "نوشتن عنوان پروژه ضروری است",
          minLength: {
            value: 10,
            message: "طول عنوان باید بیشتر از 10 کاراکتر باشد",
          },
        }}
        errors={errors}
      />
      <TextField
        label="توضیحات"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 15,
            message: "حداقل 15 کاراکتر را وارد کنید",
          },
        }}
        errors={errors}
      />
      <TextField
        label="بودجه"
        name="budget"
        type="number"
        register={register}
        required
        validationSchema={{
          required: "بودجه ضروری است",
        }}
        errors={errors}
      />
      <RHFSelect
        label="دسته بندی"
        name="category"
        register={register}
        required
        options={[]}
      />
      <TagsInput name="tags" onChange={setTags} value={tags} />
      <DatePickerField date={date} setDate={setDate} label="ددلاین" />
      <button type="submit" className="btn btn--primary w-full">
        تأیید
      </button>
    </form>
  );
}

export default CreatProjectForm;
