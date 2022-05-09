const FORBOLE_URL = 'https://www.forbole.com';
const BIG_DIPPER_URL = 'https://bigdipper.live';

export const donateLink = {
  key: 'donate',
  url: `${BIG_DIPPER_URL}/donate`,
};

export const footerLinks = [
  {
    key: 'company',
    links: [
      {
        key: 'IDEP',
        url: FORBOLE_URL,
      },
      {
        key: 'stakeNow',
        url: `${FORBOLE_URL}/stake-now`,
      },
      {
        key: 'contact',
        url: `${FORBOLE_URL}/contact`,
      },
      {
        key: 'blog',
        url: `${FORBOLE_URL}/blog`,
      },
    ],
  },
];
