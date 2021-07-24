import React, { useState } from "react";
import "./style.css";
import Signin from "../../components/signin";
import SignUp from "../../components/signup";
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
