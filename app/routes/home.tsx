import type { Route } from "./+types/home";

// import rrLogoDark from "@/assets/rr-logo-dark.svg";
// import rrLogoLight from "@/assets/rr-logo-light.svg";
import tumblrLogoWhite from "@/assets/tumblr-logo-white.png";
import tumblrLogoBlack from "@/assets/tumblr-logo-black.png";

import "./home.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MaxCodes Website" },
    { name: "description", content: "Portfolio/About Me site" },
  ];
}

export default function Home() {
  return (
    <main>
      <header>
        <h1>MaxCodes</h1>
        <p>Maxwell Jackson</p>
      </header>

      <p>
        Hello! I am Maxwell Jackson. I'm currently a freshman at Joseph P. Keefe
        Technical School. I'm interested in programming and video games.
      </p>
      <h2>My Socials</h2>
      <ul>
        <li>
          <img src={tumblrLogoBlack} />
        </li>
      </ul>
    </main>
  );
}
