import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "auto",
  paddingBottom: "50px",
};

const schema = z.object({
  name: z.string().min(1, "Wymagane"),
  surname: z.string().min(1, "Wymagane"),
  age: z.number({ message: "Musi być liczba" }),
  gender: z.enum(["male", "female", "unknown"]),
  comment: z.string().max(50, "Komentarz jest za długi"),
});

type FormData = z.infer<typeof schema>;

export const Basic = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={formStyles as React.CSSProperties}
      >
        <h1>Basic</h1>
        <label htmlFor="name">Name</label>
        <input id="name" {...register("name")} />
        {errors.name && (
          <span style={{ color: "red" }}>{errors.name.message}</span>
        )}
        <label htmlFor="surname">Surname</label>
        <input id="surname" {...register("surname")} />
        {errors.surname && (
          <span style={{ color: "red" }}>{errors.surname.message}</span>
        )}
        <label htmlFor="age">Age</label>
        <input id="age" {...register("age", { valueAsNumber: true })} />
        {errors.age && (
          <span style={{ color: "red" }}>{errors.age.message}</span>
        )}
        <label htmlFor="gender">Gender</label>
        <select id="gender" {...register("gender")}>
          <option>male</option>
          <option>female</option>
          <option>unknown</option>
        </select>
        {errors.gender && (
          <span style={{ color: "red" }}>{errors.gender.message}</span>
        )}
        <label htmlFor="comment">Comment</label>
        <textarea id="comment" {...register("comment")} />
        {errors.comment && (
          <span style={{ color: "red" }}>{errors.comment.message}</span>
        )}
        <input type="submit" value="Wyślij" />
      </form>
    </>
  );
};
