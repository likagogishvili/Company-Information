import "./company.scss";
import { companyimg } from "../assets/Company/companyimg";
function Company() {
  return (
    <div className="company md:max-w-3xl ">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            src={companyimg}
            className="object-scale-down md:h-full md:w-80"
          />
        </div>
        <div className="flex flex-col gap-5">
          <h2>Company</h2>
          <p>
            Collaboratively administrate empowered markets via plug-and-play
            networks.
          </p>
          <p>
            Dynamically procrastinate B2C users after installed base benefits.
          </p>
          <p>
            Dramatically visualize customer directed convergence without
            revolutionary ROI.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Company;
