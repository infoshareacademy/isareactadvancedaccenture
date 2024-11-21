import { useState, FormEvent } from "react";
import { Input } from "./Input";

type FormData = {
  email?: string;
  password?: string;
};

function App() {
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  const setData = (data: { [key: string]: string }) => {
    setFormData({
      ...formData,
      ...data,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input name="email" setData={setData} />
        <Input name="password" setData={setData} />
        {formData != null ? (
          <button type="submit" />
        ) : (
          <span>wypełnij formularz</span>
        )}
      </form>
    </>
  );
}

export default App;
