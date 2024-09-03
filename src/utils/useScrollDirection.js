import { useState, useEffect } from "react";

const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateScrollDir = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < 20) {
        // Minimal change to register.
        return;
      }

      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", updateScrollDir, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollDir);
    };
  }, [lastScrollY]);

  return scrollDir;
};

export default useScrollDirection;
