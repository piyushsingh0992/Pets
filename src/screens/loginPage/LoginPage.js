import React, { useState } from "react";
import "./loginPage.css";

import Signin from "../../components/signin/Signin.js";
import SignUp from "../../components/signup/Signup.js";

const LoginPage = () => {
  const [user, userSetter] = useState(true);

  return (
    <div className="loginPage">
      {user ? (
        <Signin userSetter={userSetter} />
      ) : (
        <SignUp userSetter={userSetter} />
      )}
    </div>
  );
};

export default LoginPage;
