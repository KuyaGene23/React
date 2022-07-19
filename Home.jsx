import React from "react";
import Footer from "./footer";

function Home(props) {
  return (
    <React.Fragment>
      <h1>
        Hello
        {props.user.firstName}
        {props.user.lastName}
      </h1>
      <hr />
      <Footer></Footer>
    </React.Fragment>
  );
}

export default Home;
