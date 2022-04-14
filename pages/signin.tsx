import { FunctionComponent } from "react";
import AuthForm from "../components/authForm";

const Signin: FunctionComponent = () => {
    return (
        <>
            <AuthForm mode="signin" />
        </>
      );
}

Signin.authPage = true;
 
export default Signin;