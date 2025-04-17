import { motion } from "framer-motion";
import './Hero.css'

const HeroV2 = () => {
  return (
    <section className="hero-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
      >
        <h1>Transform Your Ideas Into <span className="highlight">Stunning Websites</span></h1>
        <p className="subtitle">
          I build <strong>fast, responsive, and SEO-friendly</strong> websites that  
          <br />help businesses <strong>stand out and convert visitors</strong>.
        </p>
        <motion.a
          whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="cta-button"
        >
          🚀 Get Your Free Quote
        </motion.a>
      </motion.div>
    </section>
  );
};
export default HeroV2;