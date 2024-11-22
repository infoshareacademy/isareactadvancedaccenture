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
  const { handleSubmit, register } = useForm<FormData>();

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
        <input id="name" {...register("name")} />
        <label htmlFor="surname">Surname</label>
        <input id="surname" {...register("surname")} />
        <label htmlFor="age">Age</label>
        <input id="age" {...register("age")} />
        <label htmlFor="gender">Gender</label>
        <select id="gender" {...register("gender")}>
          <option>male</option>
          <option>female</option>
        </select>
        <label htmlFor="comment">Comment</label>
        <textarea id="comment" {...register("comment")} />
        <button type="submit">Wyślij</button>
        <button>Reset</button>
      </form>
    </>
  );
}

export default App;
