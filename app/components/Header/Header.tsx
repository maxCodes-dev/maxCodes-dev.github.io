import { Header as RACHeader } from "react-aria-components";
import { Link } from "react-router";

import "./Header.css";

function Header() {
  return (
    <RACHeader className="site-header">
      <div className="backdrop"></div>
      <div className="backdrop-edge"></div>
      <div className="header-content">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
      </div>
    </RACHeader>
  );
}

export default Header;
