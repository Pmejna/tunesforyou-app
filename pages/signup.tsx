import { FunctionComponent } from "react";
import AuthForm from "../components/authForm";

const SignUp: FunctionComponent = () => {
    return (
        <AuthForm mode="signup" />
      );
}

SignUp.authPage = true;
 
export default SignUp;