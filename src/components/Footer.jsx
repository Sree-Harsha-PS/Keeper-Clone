import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Made with ❤️</p>
      <p>Sree Harsha ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
