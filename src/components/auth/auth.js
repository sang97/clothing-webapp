import React from "react";

import "../../styles/styles.scss";

import SignIn from "./signin";
import SignUp from "./signup";

const Authentication = props => {
  return (
    <div className="sign-in-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
