import "./landing.scss";
import * as img from "../assets/LangingPage/langingImg";
import { useEffect } from "react";

function Landing() {
  function handleCallbackResponse(response: any) {
    console.log("Encoded JWT ID token ", response.credential);
    // var userObject = 
  }

  useEffect(() => {
    /* global google */
    //@ts-ignore
    google.accounts.id.initialize({
      client_id:
        "999430817633-hvb6en56r7u46belo07j8fl880rla1ag.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    //@ts-ignore
    google.accounts.id.renderButton(document.getElementById("signInBTN"), {
      theme: "outline",
      size: "large",
    });
  }, []);
  return (
    <div className="bgImg" style={{ backgroundImage: `url(${img.landingBg})` }}>
      <button
        id="signInBTN"
        className="rounded shawdow p-2 bg-white text-yellow-400"
      >
        Hello world!
      </button>
    </div>
  );
}
export default Landing;
