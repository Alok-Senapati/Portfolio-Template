import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = (threshold) => {
  const [element, view] = useInView({ threshold: threshold });
  const control = useAnimation();

  if (view) {
    control.start("show");
  } else {
    control.start("hidden");
  }
  return [element, control];
};
