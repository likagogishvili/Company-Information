import "./team.scss";
import * as teamIMG from "../assets/Team/Team";
import { motion } from "framer-motion";
function Team() {
  return (
    <div
      className="team flex flex-col md:flex-row m-auto md:max-w-4xl sm:w-100"
      id="team"
    >
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.7 }}>
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: -100 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            repeat: Infinity,
            repeatDelay: 5,
          }}
          className="images"
          style={{ backgroundImage: `url(${teamIMG.person1})` }}
        />
        <p>It Team Lead</p>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.7 }}>
        <motion.div
          className="images"
          animate={{ x: 0, y: 0 }}
          initial={{ x: -100, y: -100 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            repeat: Infinity,
            repeatDelay: 5,
          }}
          style={{ backgroundImage: `url(${teamIMG.person2})` }}
        />
        <p>PO</p>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.7 }}>
        <motion.div
          animate={{ x: 0, y: 0 }}
          initial={{ x: 100, y: -100 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            repeat: Infinity,
            repeatDelay: 5,
          }}
          className="images"
          style={{ backgroundImage: `url(${teamIMG.person3})` }}
        />
        <p>CEO</p>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.7 }}>
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: 100 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            repeat: Infinity,
            repeatDelay: 5,
          }}
          className="images"
          style={{ backgroundImage: `url(${teamIMG.person4})` }}
        />
        <p>Finance meneger</p>
      </motion.div>
    </div>
  );
}
export default Team;
