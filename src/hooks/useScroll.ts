import { useEffect, useState } from "react";

const useScroll = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldHasShadow, setShouldHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // As long as the currentScrollY is greater than the lastScrollY, that means the user is scrolling down so we hide the navbar otherwise we show it
      if (currentScrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
        setShouldHasShadow(currentScrollY > 0);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return { show, shouldHasShadow };
};

export default useScroll;
