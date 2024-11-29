import { useRef } from "react";

const NameInput = () => {
  const name = useRef("");
  const nameRef = useRef("");

  const onChange = (e) => {
    name.current = e.target.value;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    console.log({
      name: name.current,
      nameRef: nameRef.current.value,
      nameFormData: data.get("name"),
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>ReactHookForm</h1>
      <label>
        Wpisz swoje imię:
        <input name="name" ref={nameRef} onChange={onChange} type="text" />
      </label>
      <button type="submit">Wyślij</button>
    </form>
  );
};

export default NameInput;
