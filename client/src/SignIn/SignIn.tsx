import { useState, useEffect, useRef } from "react";
import jwtDecode from "jwt-decode";

declare global {
  interface Window {
    google: any;
  }
}

function SignIn() {
  const [user, setUser] = useState<any>({});
  const signInBtnRef = useRef(null);

  function handleCallbackResponse(response: any) {
    let userObject = jwtDecode(response.credential);
    if (userObject) setUser(userObject);
  }

  function handleSignOut() {
    setUser({});
  }

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id:
        "999430817633-hvb6en56r7u46belo07j8fl880rla1ag.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
  }, []);

  useEffect(() => {
    if (signInBtnRef.current) {
      window.google.accounts.id.renderButton(signInBtnRef.current, {
        theme: "outline",
        size: "large",
      });
    }
  }, [signInBtnRef]);

  return (
    <div>
      {Object.keys(user).length ? (
        <div>
          <img src={user.picture} alt="" width="20px" height="20px" />
          <h3>{user.name}</h3>
          <button id="signOut" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      ) : (
        ""
      )}
      <div ref={signInBtnRef}></div>
    </div>
  );
}

export default SignIn;
