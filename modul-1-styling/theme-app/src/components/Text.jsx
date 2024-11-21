import styled from "styled-components";

const Paragraph = styled.p`
  color: ${(props) => props.theme.color};
`;

export const Text = () => {
  return (
    <Paragraph>
      Odkrywaj możliwości w świecie technologii i wzmacniaj kompetencje z
      najlepszymi trenerami-praktykami. Sprawdź szkolenia dla Ciebie i Twojego
      zespołu.
    </Paragraph>
  );
};
