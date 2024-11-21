import { useState } from "react";
import { Text } from "./components/Text";
import { Text2 } from "./components/Text2";
import { Counter } from "./components/Counter";
import { Nav } from "./components/Nav";
import { Title } from "./components/Title";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";

export const lightTheme = {
  color: "#000000",
  backgroundColor: "#eeeeee",
};
export const darkTheme = {
  color: "#ffffff",
  backgroundColor: "#222222",
};

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div>
          <Nav setTheme={setTheme} />
        </div>
        <Title />
        <div className="card">
          <Counter />
          <Text />
          <Text2 />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
