import "./landing.scss";
import * as img from "../assets/LangingPage/langingImg";
import SignIn from "../SignIn/SignIn";
import { useShowSignIn } from "../store/selectors/Selctors";
function Landing() {
  return (
    <div
      className="bgImg"
      style={{ backgroundImage: `url(${img.landingBg})` }}
    >
      {
        useShowSignIn() && <SignIn/>
      }
      
    </div>
  );
}
export default Landing;
