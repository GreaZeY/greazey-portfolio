import Link from "next/link";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillCodepenSquare,
} from "react-icons/ai";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = ({ resumeLink }) => {
  return (
    <Container>
      <Div1>
        <Link href="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "50px",
              marginTop: "-5px",
            }}
          >
            <img
              draggable="false"
              style={{ width: "35px", height: "40px", filter: "invert(1)" }}
              src="vercel.svg"
            ></img>
            <Span>Portfolio</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons
          style={{ marginTop: "-20px" }}
          href="https://github.com/GreaZey"
          target="_blank"
        >
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons
          style={{ marginTop: "-20px" }}
          href="https://www.linkedin.com/in/greazey "
          target="_blank"
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons
          style={{ marginTop: "-20px" }}
          href="https://codepen.io/greazey"
          target="_blank"
        >
          <AiFillCodepenSquare size="3rem" />
        </SocialIcons>
        <div className="resume">
          <a
            className="resumelink"
            style={{ color: "rgb(0, 255, 149)" }}
            href={resumeLink}
            target="_blank"
          >
            Resume
          </a>
        </div>
      </Div3>
    </Container>
  );
};
export default Header;
