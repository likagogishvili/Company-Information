import "./company.scss";
import { person } from "../assets/Company/companyimg";
import { motion } from "framer-motion";
function Company() {
  return (
    <div className="companyCont area" id="company">
      <div className="custom-shape-divider-bottom-1683095621">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <div className="hidden sm:block">
        <img src={person} className="float-right" alt=""/>
        </div>
        <motion.div
          className="company "
          animate={{ x: 0 }}
          initial={{ x: -1000 }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:flex">
            <div className="flex flex-col gap-5">
              <motion.h2>Company</motion.h2>
              <motion.p
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 1, duration: 1 }}
              >
                &#x2022; Collaboratively administrate empowered markets via
                plug-and-play networks.
              </motion.p>
              <motion.p
                animate={{ opacity: 1 }}
                initial={{ opacity: -100 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                &#x2022; Dynamically procrastinate B2C users after installed
                base benefits.
              </motion.p>
              <motion.p
                animate={{ opacity: 1 }}
                initial={{ opacity: -100 }}
                transition={{ delay: 1.8, duration: 1 }}
              >
                &#x2022; Dramatically visualize customer directed convergence
                without revolutionary ROI.
              </motion.p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="cronology company  "
          animate={{ x: 0 }}
          initial={{ x: -1000 }}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          <div className="md:flex">
            <div className="flex flex-col gap-5 ">
              <motion.h2 transition={{ delay: 3, duration: 1 }}>
                Timeline
              </motion.h2>
              <motion.p
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 3.3, duration: 1 }}
              >
                &#x2022; 2020 built office
              </motion.p>
              <motion.p
                animate={{ opacity: 1 }}
                initial={{ opacity: -100 }}
                transition={{ delay: 3.5, duration: 1 }}
              >
                &#x2022; 2021 went online
              </motion.p>
              <motion.p
                animate={{ opacity: 1 }}
                initial={{ opacity: -100 }}
                transition={{ delay: 4.3, duration: 1 }}
              >
                &#x2022; 2022 opened the shop
              </motion.p>
            </div>
          </div>
        </motion.div>
      </ul>
    </div>
  );
}
export default Company;
