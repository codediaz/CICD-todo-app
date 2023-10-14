import React from "react";
import Bookmark from "@material-ui/icons/Bookmark";
import "./styles.scss";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="container">
          <div>
            <Bookmark/>
            <h1>RAFA Y RODRI X 1100PREE</h1>
          </div>
          
        </div>
      </nav>
    </div>
  );
}
