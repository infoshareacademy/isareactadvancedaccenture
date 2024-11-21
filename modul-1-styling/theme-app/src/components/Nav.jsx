import { darkTheme, lightTheme } from "../App";

export const Nav = ({ setTheme }) => {
  return (
    <>
      <button
        onClick={() => {
          setTheme(lightTheme);
        }}
      >
        Light
      </button>
      <button
        onClick={() => {
          setTheme(darkTheme);
        }}
      >
        Dark
      </button>
    </>
  );
};
