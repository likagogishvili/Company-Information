import "./company.scss";
import { companyimg, timeline } from "../assets/Company/companyimg";
import { motion } from "framer-motion";
function Company() {
  return (
    <div className="companyCont" id="company">
      <motion.div
        className="company md:max-w-4xl sm:min-w-5xl"
        animate={{ x: 0 }}
        initial={{ x: -1000 }}
        transition={{ duration: 0.6 }}
      >
        <div className="md:flex">
          <div className="md:shrink-0">
            <motion.img
              src={companyimg}
              animate={{ scale: 1 }}
              initial={{ scale: 3 }}
              transition={{ delay: 0.2, duration: 1 }}
              whileHover={{ scale: 1.1 }}
              className="object-scale-down md:h-full md:w-60"
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
              &#x2022; Dynamically procrastinate B2C users after installed base
              benefits.
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
        className="cronology company md:max-w-4xl sm:min-w-5xl  md:float-right"
        animate={{ x: 0 }}
        initial={{ x: 1700 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <div className="md:flex">
          <div className="flex flex-col gap-5 " style={{ width: "25vw" }}>
            <motion.h2
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.7 }}
              transition={{ delay: 3, duration: 1 }}
            >
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
          <div className="md:shrink-0">
            <motion.img
              src={timeline}
              animate={{ scale: 0.8 }}
              initial={{ scale: 3 }}
              transition={{ delay: 2.5, duration: 1 }}
              whileHover={{ scale: 1.1 }}
              className="object-scale-down md:h-50 md:w-50"
              alt=""
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default Company;
