import React from "react";
import NavBar from "./NavBar";
import CakeList from "./CakeList";

class VisitorHome {
  render(){
    return (
      <segment>
        <NavBar />
        <CakeList />
      </segment>
    );
  }
}

export default VisitorHome;
