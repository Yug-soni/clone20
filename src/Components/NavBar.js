import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar/SearchBar";
import More from "./DropDowns/More";
import User from "./DropDowns/User";
import Cart from "./Buttons/Cart";

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <Logo></Logo>
        <SearchBar></SearchBar>
        <More></More>
        <User></User>
        <Cart></Cart>
      </div>
    );
  }
}

export default NavBar;
