import React from 'react';
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
} from '@icons';

export const socialMediaLinks:{
  component: React.ReactNode;
  className: string;
  url: string;
}[] = [
  {
    component: <TwitterIcon />,
    className: 'twitter',
    url: 'https://twitter.com/idepnetwork',
  },
  {
    component: <GithubIcon />,
    className: 'github',
    url: 'https://github.com/IDEP-network',
  },
  {
    component: <DiscordIcon />,
    className: 'discord',
    url: 'https://discord.com/invite/Jrarctk4hG',
  },
];
