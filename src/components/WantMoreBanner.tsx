// import { motion } from "motion/react";
import "./WantMoreBanner.css";
import confetti from "canvas-confetti";
import confetti_sound from "../assets/25 confetti Sound effect.mp3";
import { motion } from "motion/react";

const handleClick = (e) => {
  e.preventDefault();
  confetti({
    particleCount: 150,
    spread: 60,
  });

  new Audio(confetti_sound).play();
};

const WantMoreBanner = () => {
  return (
    <>
      <div className="banner-main-div">
        <div className="want-more-banner-div">
          <h1 className="want-more-title">WANT MORE?</h1>
          <br></br>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
            <a
              href=""
              className="subscribe-button"
              onClick={(e) => handleClick(e)}
            >
              Subscribe to us on Patreon ;)
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default WantMoreBanner;
