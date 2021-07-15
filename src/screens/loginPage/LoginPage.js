import React, { useState } from "react";
import "./loginPage.css";
import Signin from "../../components/signin/Signin.js";
import SignUp from "../../components/signup/Signup.js";
const LoginPage = () => {
  const [user, userSetter] = useState(true);

  const [signInDetails, signInDetailsSetter] = useState({
    password: "",
    userId: "",
  });

  const [signUpDetails, signUpDetailsSetter] = useState({
    userName: "",
    password: "",
    userId: "",
  });

  return (
    <div className="loginPage">
      {user ? (
        <Signin
          userSetter={userSetter}
          signInDetails={signInDetails}
          signInDetailsSetter={signInDetailsSetter}
        />
      ) : (
        <SignUp
          userSetter={userSetter}
          signUpDetails={signUpDetails}
          signUpDetailsSetter={signUpDetailsSetter}
          signInDetailsSetter={signInDetailsSetter}
        />
      )}
    </div>
  );
};

export default LoginPage;
