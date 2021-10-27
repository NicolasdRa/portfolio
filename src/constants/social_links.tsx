import React from 'react';
import { FaGithub, FaLinkedin, FaXing } from 'react-icons/fa';
import { SiCodersrank } from 'react-icons/si';

const data = [
  {
    id: 1,
    name: 'Github',
    icon: <FaGithub className="social-icon" />,
    url: 'https://github.com/NicolasdRa',
  },
  {
    id: 2,
    name: 'Codersrank',
    icon: <SiCodersrank className="social-icon" />,
    url: 'https://profile.codersrank.io/user/nicolasdra/',
  },
  {
    id: 3,
    name: 'Linkedin',
    icon: <FaLinkedin className="social-icon" />,
    url: 'https://www.linkedin.com/in/nicol%C3%A1s-di-rago-tango-code/',
  },
  {
    id: 4,
    name: 'Xing',
    icon: <FaXing className="social-icon" />,
    url: 'https://www.xing.com/profile/Nicolas_diRago/cv',
  },
  // {
  //   id: 5,
  //   icon: <FaInstagram className="social-icon" />,
  //   url: 'https://www.instagram.com/nicolasdirago/',
  // },
];

export default data;
