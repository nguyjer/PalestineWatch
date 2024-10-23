<<<<<<< HEAD
export default function NavBar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
=======
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
            style={{ width: "20px", height: "20px", marginRight: "5px", marginBottom: "3px" }}
          />
>>>>>>> 2ba86119c7f8de9f9c8a60d39ac9943d16e0498f
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
<<<<<<< HEAD
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="/about">
              About
            </a>
            <a className="nav-link" href="/news">
              News
            </a>
            <a className="nav-link" href="/support-groups">
              Support Groups
            </a>
            <a className="nav-link" href="/countries">
=======
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
>>>>>>> 2ba86119c7f8de9f9c8a60d39ac9943d16e0498f
              Countries
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
