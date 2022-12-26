import React from "react";
import { Link } from "react-router-dom";
import HiutXLavenham from "../Routes/HiutXLavenham";
import LandfillDropout from "../Routes/LandfillDropout";

function Navbar(props) {
  return (
    <>
      <div id="announcementContainer">
        <Link id="announcement" to="/">
          Made in Wales. Free Repairs For Life.
        </Link>
      </div>
      <div
        id="navbar"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Link to="/">
          <img
            src="https://cdn.shopify.com/s/files/1/0065/4242/t/55/assets/slim-logo.svg?v=137025862761394426011670425318"
            alt="logo"
            id="nav-logo"
          />
        </Link>
        <div
          id="nav-links"
          style={{
            display: "flex",
            justifyContent: "space-between",
            minWidth: "66%",
          }}
        >
          <Link
            className="navlink"
            to="/hiut-x-lavenham"
            element={<HiutXLavenham />}
          >
            Hiut x Lavenham
          </Link>
          <Link
            className="navlink"
            to="/landfill-dropout"
            element={<LandfillDropout />}
          >
            Landfill Dropout
          </Link>
          <Link className="navlink" to="/men" element={<LandfillDropout />}>
            Men
          </Link>
          <Link className="navlink" to="/womens" element={<LandfillDropout />}>
            Women
          </Link>
          <Link
            className="navlink"
            to="/not-denim"
            element={<LandfillDropout />}
          >
            Not Denim
          </Link>
          <Link
            className="navlink"
            to="/subscribe"
            element={<LandfillDropout />}
          >
            Subscribe
          </Link>
          <Link
            className="navlink"
            to="/our-story"
            element={<LandfillDropout />}
          >
            Our Story
          </Link>
          <Link
            className="navlink"
            to="/your-account"
            element={<LandfillDropout />}
          >
            Your Account
          </Link>
          <Link className="navlink" to="/cart" element={<LandfillDropout />}>
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <Link className="navlink" to="/search" element={<LandfillDropout />}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
