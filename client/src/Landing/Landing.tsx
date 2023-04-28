import "./landing.scss";
import * as img from "../assets/LangingPage/langingImg";
import SignIn from "../SignIn/SignIn";
function Landing() {
  return (
    <div
      className="bgImg"
      style={{ backgroundImage: `url(${img.landingBg})` }}
    >
      <SignIn/>
    </div>
  );
}
export default Landing;
