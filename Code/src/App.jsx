import { useForm } from "react-hook-form";
import FormInput from "./FormInput";

export default function App() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-200">

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-5 rounded-2xl">

        <FormInput
          name="email"
          label="Email"
          placeholder="Enter email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          }}
        />

        <FormInput
          name="password"
          label="Password"
          type="password"
          placeholder="Enter password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Minimum 6 characters",
            },
          }}
        />

        <button type="submit" className="bg-green-600 text-white px-3 py-1 rounded-xl">Submit</button>
      </form>
    </div >
  );
}
