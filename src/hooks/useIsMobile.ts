import { useEffect, useState } from "react";

const getIsMobile = () => innerWidth < 720;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(getIsMobile());
  const resizing = () => setIsMobile(getIsMobile());

  useEffect(() => {
    addEventListener("resize", resizing);
    return () => removeEventListener("resize", resizing);
  }, []);

  return isMobile;
};

export default useIsMobile;
