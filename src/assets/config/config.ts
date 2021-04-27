export const information = {
  email: 'dvagere@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/dvagere',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/dvagere',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/diligence-vagere-585ab912b/',
    },
    {
      name: 'StackOverflow',
      url: 'https://stackoverflow.com/users/11232778/diligence-vagere',
    },
  ],

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
