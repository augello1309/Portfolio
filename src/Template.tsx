import { ReactNode } from "react";
import "../src/template.css";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  page: string;
  body: JSX.Element;
}
const shrink_btn = document.querySelector(".shrink-btn");
const handleShrink = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
  e.preventDefault();
  document.body.classList.toggle("shrink");
  shrink_btn?.classList.add("hovered");
  setTimeout(() => {
    shrink_btn?.classList.remove("hovered");
  }, 500);
};

// <i class='bx bxs-dashboard' ></i> **Dashboard Picture
// <i class='bx bxs-folder' ></i> **Projects Picture
// <i class='bx bxs-contact' ></i> **Contact Info Picture

const Template = ({ children, page, body }: Props) => {
  return (
    <>
      <div className="mainBox">
        {/* <div className="column">Hello</div> */}
        <nav>
          <div className="sidebar-top">
            <span className="shrink-btn" onClick={handleShrink}>
              <i className="bx bx-left-arrow-alt"></i>
            </span>
            <img
              src="../public/projectportfolio.png"
              className="logo"
              alt=""
            ></img>
            <h3 className="hide">Alex's Portfolio</h3>
          </div>
          <div className="sidebar-links">
            <ul className="navlist">
              <li>
                <Link to="/" className="navlinks">
                  <div className="icon">
                    <i className="bx bxs-dashboard"></i>
                  </div>
                  <span className="link hide">Dashboard</span>
                </Link>
                <Link to="/projects" className="navlinks">
                  <div className="icon">
                    <i className="bx bxs-folder"></i>
                  </div>
                  <span className="link hide">Projects</span>
                </Link>
                <Link to="/contactinfo" className="navlinks">
                  <div className="icon">
                    <i className="bx bxs-contact"></i>
                  </div>
                  <span className="link hide">Contact Info</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <h1>{page}</h1>
          <div>{body}</div>
        </main>
        {/* <script src="app.js"></script> */}
      </div>
    </>
  );
};

export default Template;
