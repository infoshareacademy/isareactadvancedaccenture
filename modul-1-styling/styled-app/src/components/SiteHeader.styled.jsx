import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`;

export const Logo = styled.h1`
  font-family: Pacifico, cursive;
  font-weight: 400;
  font-size: 50px;
  margin: 0;
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  font-weight: 600;
  padding: 0;
  margin: 0;
`;

export const Link = styled.a`
  color: #262626;
  text-decoration: none;
  display: block;
  border-top: 3px solid transparent;
  padding-top: 5px;
  transition: border-top-color 0.2s;
  margin-right: 35px;
  font-size: 16px;
  border-top-color: ${(props) => (props.active ? "#ff6033" : "transparent")};
  &:hover {
    border-top-color: #ff6033;
  }
`;
