import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

declare global {
  interface Window {
    google: any;
  }
}
function SignIn() {
  const [user, setUser] = useState<any>({});
  function handleCallbackResponse(response: any) {
    let userObject = jwtDecode(response.credential);
    document.getElementById("signInBTN")!.hidden = true;
    if (userObject) setUser(userObject);
  }
  function handleSignOut() {
    setUser({});
    document.getElementById("signInBTN")!.hidden = false;
  }

  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id:
          "999430817633-hvb6en56r7u46belo07j8fl880rla1ag.apps.googleusercontent.com",
        callback: handleCallbackResponse,
      });
      window.google.accounts.id.renderButton(
        document.getElementById("signInBTN"),
        {
          theme: "outline",
          size: "large",
        }
      );
    }
  }, []);
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
      <button id="signInBTN">Sign In</button>
    </div>
  );
}
export default SignIn;
