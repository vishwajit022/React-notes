import { useForm } from "react-hook-form";
function Form({ handleFormSubmitData }) {
  const { register, handleSubmit } = useForm();
  return (
    <div className="mt-10 flex justify-center">
      <form
        className="flex gap-20  "
        onSubmit={handleSubmit((data) => handleFormSubmitData(data))}
      >
        <input
          {...register("name")}
          className="border-solid border-2 border-sky-500 rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="Name"
        />
        <input
          {...register("email")}
          className="border-solid border-2 border-sky-500 rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="Email"
        />
        <input
          {...register("image")}
          className="border-solid border-2 border-sky-500 rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="image src"
        />
        <input
          className="px-6 text-white font-semibold py-1 rounded-lg bg-blue-600"
          type="submit"
        />
      </form>
    </div>
  );
}

export default Form;
