import { useTheme } from "styled-components";

export const Nav = () => {
  const { setLightTheme, setDarkTheme } = useTheme();

  return (
    <>
      <button
        onClick={() => {
          setLightTheme();
        }}
      >
        Light
      </button>
      <button
        onClick={() => {
          setDarkTheme();
        }}
      >
        Dark
      </button>
    </>
  );
};
