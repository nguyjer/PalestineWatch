// components/NavBar.js
export default function NavBar() {

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand active" href="/">
          PalestineWatch
        </a>
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
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/about">
              About
            </a>
            <a className="nav-link active" href="/news">
              News
            </a>
            <a className="nav-link active" href="/support-groups">
              Support Groups
            </a>
            <a className="nav-link active" href="/countries">
              Countries
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
