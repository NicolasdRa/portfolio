import React from 'react';
import { FaGithub, FaLinkedin, FaXing, FaInstagram } from 'react-icons/fa';

const data = [
  {
    id: 1,
    icon: <FaGithub className="social-icon" />,
    url: 'https://github.com/NicolasdRa',
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon" />,
    url: 'https://www.linkedin.com/in/nicol%C3%A1s-di-rago-tango-code/',
  },
  {
    id: 3,
    icon: <FaXing className="social-icon" />,
    url: 'https://www.xing.com/profile/Nicolas_diRago/cv',
  },
  {
    id: 4,
    icon: <FaInstagram className="social-icon" />,
    url: 'https://www.instagram.com/nicolasdirago/',
  },
];

export default data;
