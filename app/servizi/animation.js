export const slideUp = {
  initial: {
    y: 50,
  },
  enter: {
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 1, delay: 0.2 },
  },
};
