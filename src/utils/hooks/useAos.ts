import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function useAOS(config?: any) {
  useEffect(() => {
    AOS.init(config);

    AOS.refresh();
  }, []);

  return AOS;
}
