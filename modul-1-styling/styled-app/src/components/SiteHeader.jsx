import "./SiteHeader.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`;

const Logo = styled.h1`
  font-family: Pacifico, cursive;
  font-weight: 400;
  font-size: 50px;
  margin: 0;
`;

const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  font-weight: 600;
  padding: 0;
  margin: 0;
`;

const Link = styled.a`
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

export const SiteHeader = () => (
  <header className="site-header">
    <Container>
      <Logo>Cahee</Logo>
      <nav className="nav">
        <NavMenu>
          <li>
            <Link active href="#">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#services">Services</Link>
          </li>
          <li>
            <Link href="#gallery">Gallery</Link>
          </li>
          <li>
            <Link href="#blog">Blog</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </NavMenu>
      </nav>
    </Container>
  </header>
);
