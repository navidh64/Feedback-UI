import React from "react";
import { HeaderProps } from "./types";

const Header = (props: HeaderProps) => {
  const headerStyles = {
    backgroundColor: props.bgColor,
    color: props.textColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{props.text}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "red",
  textColor: "blue",
};

export default Header;
