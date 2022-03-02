export const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    // zIndex: 9,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    },
    transitionEnd: () => {
      console.log('PEPE')
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    // zIndex: 9,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  },
};
