import React from "react";

import "../styles/styles.scss";

import SignIn from "../components/auth/signin";
import SignUp from "../components/auth/signup";

const AuthenticationPage = props => {
  return (
    <div className="sign-in-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default AuthenticationPage;
