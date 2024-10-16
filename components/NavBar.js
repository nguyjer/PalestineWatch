// components/NavBar.js
import React from "react";

export default function NavBar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Keep PalestineWatch aligned to the left */}
        <a className="navbar-brand" href="/">
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
          {/* Shift all links to the right */}
          <div className="navbar-nav ms-auto">
            <a className="nav-link me-4" aria-current="page" href="/about">
              About
            </a>
            <a className="nav-link me-4" href="/news">
              News
            </a>
            <a className="nav-link me-4" href="/support-groups">
              Support Groups
            </a>
            <a className="nav-link me-4" href="/countries">
              Countries
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
