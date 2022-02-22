import { useEffect, useState } from "react";
import Footer from './Footer';
import Navbar from './Navbar';
import  style  from '../styles/Home.module.css'





const Layout = ({ children }) => {
     // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
    return (
        <>
            <Navbar />
            {children}

            {showButton && (
        <button onClick={scrollToTop} className={style.backToTop}>
          &#8679;
        </button>
          )}
            <Footer />
        </>
    );
};


export default Layout;