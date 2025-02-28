import React from "react";

function Header() {
  console.log("Header rerendered");
  return <h2>Header</h2>;
}

export default React.memo(Header);
