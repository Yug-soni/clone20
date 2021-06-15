import React from "react";
import NavBar from "./NavBar";
import CategoryList from "./CategoryList";
import SlidingBanner from "./SlidingBanner";
import DealsOfDay from "./DealsOfDay";

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <NavBar></NavBar>
        <CategoryList></CategoryList>
        <SlidingBanner></SlidingBanner>
        <DealsOfDay></DealsOfDay>
      </div>
    );
  }
}

export default MainPage;
