import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Pathname changed to: ", pathname);  // Ajoutez ce log pour le débogage
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
