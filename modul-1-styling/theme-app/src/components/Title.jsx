import { useTheme } from "styled-components";

export const Title = () => {
  const theme = useTheme();

  return (
    <h1 style={{ color: theme.color }}>{"INFOSHARE".split("").join("_")}</h1>
  );
};
