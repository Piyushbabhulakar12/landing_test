import logo from "../../assets/images/Logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  fixed-top">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between align-items-center"
            id="navbarNavAltMarkup"
          >
            <div
              className="navbar-nav"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "40px",
              }}
            >
              <a className="nav-link navLink" aria-current="page" href="/">
                PROJECTS
              </a>
              <a className="nav-link navLink" href="/">
                EXPERTISE
              </a>
              <a className="nav-link navLink" href="/">
                ABOUT US
              </a>
              <a className="nav-link navLink" href="/">
                PEOPLE
              </a>
            </div>
            <a className="navbar-brand mx-auto" href="/">
              <img src={logo} alt="Logo" />
            </a>
            <div
              className="navbar-nav"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <a className="nav-link navLink" href="/">
                CAREERS
              </a>
              <a className="nav-link navLink" href="/">
                AU
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
