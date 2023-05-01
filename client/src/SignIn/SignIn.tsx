import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/index";
import { useShowSignIn } from "../store/selectors/Selctors";

import "./signIn.scss";
declare global {
  interface Window {
    google: any;
  }
}

function SignIn() {
  const showSignIn = useShowSignIn();
  const dispatch = useDispatch();
  function handleCallbackResponse(response: any) {
    let userObject = jwtDecode(response.credential);
    if (userObject) dispatch(counterActions.SetUser(userObject));
    dispatch(counterActions.SetSignIn(!showSignIn));
    document.getElementById("signInWithGoogle")!.style.display = "none";
  }

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id:
        "999430817633-hvb6en56r7u46belo07j8fl880rla1ag.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    window.google.accounts.id.renderButton(
      document.getElementById("signInWithGoogle"),
      {}
    );
  }, []);

  return (
    <div className="signInDiv">
      <div className="signInStyles" id="signInWithGoogle"></div>
    </div>
  );
}

export default SignIn;
