export const items = [
  {
    id: 0,
    title: 'Home',
    path: '/',
  },
  {
    id: 1,
    title: 'Game',
    path: '/game'
  },
  // TODO:: uncomment when the page /messages is ready
  // {
  //   id: 2,
  //   title: 'Messages',
  //   path: '/messages'
  // }
];

export const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const variants2 = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};