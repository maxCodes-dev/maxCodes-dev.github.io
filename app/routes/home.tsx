import type { Route } from "./+types/home";

// import rrIconDark from "@/assets/rr-icon-dark.svg";
// import rrIconLight from "@/assets/rr-icon-light.svg";
import tumblrLogoWhite from "@/assets/tumblr-logo-white.png";
import tumblrLogoBlack from "@/assets/tumblr-logo-black.png";
import githubInvertocatWhite from "@/assets/GitHub_Invertocat_White.svg";
import githubInvertocatBlack from "@/assets/GitHub_Invertocat_Black.svg";

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
      <h2>Where to find me online:</h2>
      <ul id="accounts-list">
        <li>
          <img
            src={tumblrLogoBlack}
            className="tumblr-icon brand-icon icon-black"
            alt="Tumblr:"
          />
          <img
            src={tumblrLogoWhite}
            className="tumblr-icon brand-icon icon-white"
            alt="Tumblr:"
          />
          <a href="https://www.tumblr.com/deltaruniccode">
            @deltaruniccode (MaxCodes)
          </a>
        </li>
        <li>
          <img
            src={githubInvertocatBlack}
            className="github-icon-icon brand-icon icon-black"
            alt="GitHub:"
          />
          <img
            src={githubInvertocatWhite}
            className="github-icon-icon brand-icon icon-white"
            alt="GitHub:"
          />
          <a href="https://github.com/maxCodes-dev">@maxCodes-dev</a>
        </li>
      </ul>
    </main>
  );
}
