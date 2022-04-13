import { FunctionComponent } from "react";
import AuthForm from "../components/authForm";

const Signup: FunctionComponent = () => {
    return (
        <AuthForm mode="signup" />
      );
}

Signup.authPage = true;
 
export default Signup;