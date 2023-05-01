import "./company.scss";
import { companyimg } from "../assets/Company/companyimg";
import { motion } from "framer-motion";
function Company() {
  return (
    <motion.div
      className="company md:max-w-3xl "
      animate={{ x: 0 }}
      initial={{ x: -1000 }}
      transition={{ duration: 0.6 }}
    >
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            src={companyimg}
            className="object-scale-down md:h-full md:w-80"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5  tablet:w-30">
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.7 }}>
            Company
          </motion.h2>
          <motion.p
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Collaboratively administrate empowered markets via plug-and-play
            networks.
          </motion.p>
          <motion.p
            animate={{ opacity: 1 }}
            initial={{ opacity: -100 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Dynamically procrastinate B2C users after installed base benefits.
          </motion.p>
          <motion.p
            animate={{ opacity: 1 }}
            initial={{ opacity: -100 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            Dramatically visualize customer directed convergence without
            revolutionary ROI.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
export default Company;
