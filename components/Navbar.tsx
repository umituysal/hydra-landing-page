import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex space-x-8 text-xs text-white uppercase">
        <li>
          <Link title="about" href={"#"}>
            about
          </Link>{" "}
        </li>
        <li>
          <Link title="services" href={"#"}>
            services{" "}
          </Link>
        </li>
        <li>
          <Link title="technologies" href={"#"}>
            technologies
          </Link>
        </li>
        <li>
          <Link title="how to" href={"#"}>
            how to
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
