export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number,
) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};


export const fadeIn = (delay: number, duration: number) => {
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const bounceIn = (delay: number, duration: number) => {
  return {
    hidden: {
      y: -100,
      scale: 0.5,
    },
    show: {
      y: 0,
      scale: 1,
      transition: {
        delay: delay,
        duration: duration,
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };
};


export const rotate = () => {
  return {
    hidden: {
      rotate: 0,
    },
    show: {
      rotate: 360,
      transition: {
        duration: 2,
        ease: "linear",
      },
    },
  }
};
