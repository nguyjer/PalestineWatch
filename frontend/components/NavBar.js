// components/NavBar.js
export default function NavBar() {

  return (
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand active" href="/">
          PalestineWatch
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="/about">
              About
            </a>
            <a class="nav-link active" href="/news">
              News
            </a>
            <a class="nav-link active" href="/support-groups">
              Support Groups
            </a>
            <a class="nav-link active" href="/countries">
              Countries
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
