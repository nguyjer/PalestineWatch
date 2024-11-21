import React from "react";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  // Function to determine if the link is active
  const isActive = (pathname) => router.pathname === pathname;

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Keep PalestineWatch aligned to the left */}
        <a className="navbar-brand" href="/">
          <img
            src="/watermelon.ico"
            alt="PalestineWatch Icon"
            style={{
              width: "20px",
              height: "20px",
              marginRight: "5px",
              marginBottom: "3px",
            }}
          />
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
            <a
              className={`nav-link me-4 ${
                isActive("/about") ? "active font-weight-bold" : ""
              }`}
              href="/about"
            >
              About
            </a>
            <a
              className={`nav-link me-4 ${
                isActive("/news") ? "active font-weight-bold" : ""
              }`}
              href="/news"
            >
              News
            </a>
            <a
              className={`nav-link me-4 ${
                isActive("/support-groups") ? "active font-weight-bold" : ""
              }`}
              href="/support-groups"
            >
              Support Groups
            </a>
            <a
              className={`nav-link me-4 ${
                isActive("/countries") ? "active font-weight-bold" : ""
              }`}
              href="/countries"
            >
              Countries
            </a>
            <a
              className={`nav-link me-4 ${
                isActive("/searchAll") ? "active font-weight-bold" : ""
              }`}
              href="/searchAll"
            >
              Search All
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
