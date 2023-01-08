import { useEffect, useState } from "react";
import '../styles/backtotop.css';
function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`back-to-top-button ${showButton ? "show" : ""}`}
      onClick={handleClick}
    >
     &#8593;
      
    </button>
  );
}

export default BackToTopButton;