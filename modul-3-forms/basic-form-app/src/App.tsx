import { useForm } from "react-hook-form";

const formStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "auto",
};

type FormData = {
  name: string;
  surname: string;
  age: string;
  gender: "male" | "female";
  comment: string;
};

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={formStyles as React.CSSProperties}
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          {...register("name", {
            required: true,
            pattern: /^[A-Za-z]+$/,
          })}
        />
        {errors.name && errors.name.type === "required" && (
          <span style={{ color: "red" }}>This field is required</span>
        )}
        {errors.name && errors.name.type === "pattern" && (
          <span style={{ color: "red" }}>
            This field can contain only letters
          </span>
        )}
        <label htmlFor="surname">Surname</label>
        <input
          id="surname"
          {...register("surname", {
            required: "This field is required",
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "This field can contain only letters",
            },
          })}
        />
        {errors.surname && (
          <span style={{ color: "red" }}>{errors.surname.message}</span>
        )}
        <label htmlFor="age">Age</label>
        <input id="age" {...register("age")} />
        <label htmlFor="gender">Gender</label>
        <select id="gender" {...register("gender")}>
          <option>male</option>
          <option>female</option>
        </select>
        <label htmlFor="comment">Comment</label>
        <textarea id="comment" {...register("comment", { maxLength: 50 })} />
        {errors.comment && errors.comment.type === "maxLength" && (
          <span style={{ color: "red" }}>
            This field can contain only 50 characters
          </span>
        )}
        <button type="submit">Wyślij</button>
        <button onClick={() => reset()}>Reset</button>
      </form>
    </>
  );
}

export default App;
