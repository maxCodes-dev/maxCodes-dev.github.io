import type { Route } from "./+types/home";

import rrLogoDark from "@/assets/rr-logo-dark.svg";
import rrLogoLight from "@/assets/rr-logo-light.svg";

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
      <p>Work in progress!</p>
      <p>Made with:</p>
      <img id="rr-logo-dark" src={rrLogoDark} alt="React Router" />
      <img id="rr-logo-light" src={rrLogoLight} alt="React Router" />
    </main>
  );
}
