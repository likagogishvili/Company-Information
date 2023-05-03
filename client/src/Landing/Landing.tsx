import "./landing.scss";
import * as img from "../assets/LangingPage/langingImg";
import SignIn from "../SignIn/SignIn";
import { useShowSignIn, UseUser } from "../store/selectors/Selctors";
import Company from "../Company/Company";
import Team from "../Team/Team";

function Landing() {
  const user = UseUser();

  return (
    <div
      className="bgImg "
      style={{ backgroundImage: `url(${img.landingBg})` }}
    >
      {/* <div className="welcomediv pt-20">
        <h1 id="home">Welcome {user.name} </h1>
      </div> */}
      {useShowSignIn() && <SignIn />}
      <Company />
      <Team />
      <div style={{ height: "1000px" }}></div>
    </div>
  );
}
export default Landing;
