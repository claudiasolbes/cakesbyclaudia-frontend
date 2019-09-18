import React from "react"
import Home from "./Home"
import About from "./About"
import Order from "./Order"
import Contact from "./Contact"

class NavBar {
  render(){
    return (
      <segment>
        <Home />
        <About />
        <Order />
        <Contact />
      </segment>
    );
  }
}

export default NavBar;
