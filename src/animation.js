export const pageAnimation = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  hidden: {
    opacity: 0,
    y: 300,
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.5,
    },
  },
};

export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const imageAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const waveAnim = {
  hidden: {
    pathLength: 0,
    pathOffset: 1,
  },
  show: {
    pathLength: 1,
    pathOffset: 0,
  },
};

export const lineAnim = {
  hidden: {
    width: "0%",
    backgroundColor: "#ff0000",
  },
  show: {
    width: "100%",
    backgroundColor: "#23d997",
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 0.25,
    },
  },
};

export const slider = {
  hidden: {
    x: "-130%",
    skew: "60deg",
  },
  show: {
    x: "100%",
    skew: "0deg",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export const sliderContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};
export const cardContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      type: "spring",
      when: "beforeChildren",
    },
  },
};

export const answerAnim = {
  hidden: {
    y: -50,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.25,
    },
  },
  exit: {
    y: -50,
    transition: {
      duration: 0.5,
    },
  },
};

export const sectionAnim = {
  hidden: {
    scale: 1.2,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1,

      when: "beforeChildren",
    },
  },
};

export const cardAnim = {
  hidden: {
    scale: 1.2,
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

export const navLine = {
  hidden: {
    width: "0px",
    display: "hidden",
    opacity: 0,
  },
  show: {
    width: "100%",
    display: "initial",
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};
