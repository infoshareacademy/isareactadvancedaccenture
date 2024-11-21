import { withTheme } from "styled-components";

const Text = ({ theme }) => {
  return (
    <p style={{ color: theme.color }}>
      Odkrywaj możliwości w świecie technologii i wzmacniaj kompetencje z
      najlepszymi trenerami-praktykami. Sprawdź szkolenia dla Ciebie i Twojego
      zespołu.
    </p>
  );
};

export const Text2 = withTheme(Text);
