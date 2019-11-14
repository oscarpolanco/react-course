import React, { useState } from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";
import colors from "./colors";

const NavBar = () => {
  const [padding, setPadding] = useState(15);
  return (
    <header
      onClick={() => setPadding(padding + 15)}
      css={css`
        background-color: ${colors.secondary};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        css={css`
          font-size: 60px;
          &:hover {
            text-decoration: underline;
          }
        `}
        role="img"
        aria-label="logo"
      >
        🐩
      </span>
    </header>
  );
};

export default NavBar;
