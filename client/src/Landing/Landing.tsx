import "./landing.scss";
import * as img from "../assets/LangingPage/langingImg";
import SignIn from "../SignIn/SignIn";
import { useShowSignIn } from "../store/selectors/Selctors";
import Company from "../Company/Company";

function Landing() {
  return (
    <div
      className="bgImg "
      style={{ backgroundImage: `url(${img.landingBg})` }}
    >
      <div className="welcomediv">
        <h1>Welcome To Our Page</h1>
      </div>
      {useShowSignIn() && <SignIn />}
      <Company />
    </div>
  );
}
export default Landing;
