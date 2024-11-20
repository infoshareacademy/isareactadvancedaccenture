const NameInput = () => {
  return (
    <form>
      <h1>ReactHookForm</h1>
      <label>
        Wpisz swoje imię:
        <input name="name" type="text" />
      </label>
      <button type="submit">Wyślij</button>
    </form>
  );
};

export default NameInput;
