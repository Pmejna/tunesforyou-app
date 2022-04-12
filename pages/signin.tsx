import { FunctionComponent } from "react";
import AuthForm from "../components/authForm";

const SignIn: FunctionComponent = () => {
    return (
        <AuthForm mode="signin" />
      );
}

SignIn.authPage = true;
 
export default SignIn;