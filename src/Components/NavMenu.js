import { useState } from "react";
import hmbMenu from "../assets/hmb-menu.png";
import Button from "./Button";
import closeIcon from "../assets/close.png";

export default function NavMenu() {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  function handleOpenSubMenu() {
    setOpenSubMenu((cs) => !cs);
  }
  return (
    <>
      <div className="nav-menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#carousel">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <Button onClick={handleOpenSubMenu} className={"hmb-menu"}>
        <img src={hmbMenu} alt="Hamburger menu" />
      </Button>
      {openSubMenu ? (
        <div className="sub-menu">
          <ul>
            <li>
              <a onClick={handleOpenSubMenu} href="#">
                Home
              </a>
            </li>
            <li>
              <a onClick={handleOpenSubMenu} href="#about">
                About
              </a>
            </li>
            <li>
              <a onClick={handleOpenSubMenu} href="#carousel">
                Skills
              </a>
            </li>
            <li>
              <a onClick={handleOpenSubMenu} href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a onClick={handleOpenSubMenu} href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <Button onClick={handleOpenSubMenu} className={"hmb-close hmb-menu"}>
            <img src={closeIcon} alt="close-icon" />
          </Button>
        </div>
      ) : null}
    </>
  );
}
