import "./SiteHeader.css";
import { Container, Logo, NavMenu, Link } from "./SiteHeader.styled";

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
