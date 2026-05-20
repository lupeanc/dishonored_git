import "./ContactCard.css";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiBlueskyLine } from "react-icons/ri";
import { motion } from "motion/react";

const ContactCard = () => {
  return (
    <>
      <div className="main-div-contact">
        <h3 className="title-contact">Contact</h3>
        <div className="socials-container">
          <a href="" className="socials-card">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
              <MdOutlineEmail className="socials-icon"></MdOutlineEmail>
              <div className="socials-title">Email</div>
            </motion.div>
          </a>

          <a href="" className="socials-card">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
              <FaInstagram className="socials-icon"></FaInstagram>
              <div className="socials-title">Instagram</div>
            </motion.div>
          </a>
          <a href="" className="socials-card">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
              {/* <FaSquareBluesky className="socials-icon"></FaSquareBluesky> */}
              <RiBlueskyLine className="socials-icon"></RiBlueskyLine>
              <div className="socials-title">BlueSky</div>
            </motion.div>
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
