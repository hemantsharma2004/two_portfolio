export const fadeIn = (directionX, directionY, delay) => {
    return {
      hidden: {
        x: directionX === 'left' ? -30 : directionX === 'right' ? 30 : 0,
        y: directionY === 'up' ? -20 : directionY === 'down' ? 20 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1.0,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.25],
        },
      },
    };
  };
  