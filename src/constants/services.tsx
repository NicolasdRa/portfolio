import React from 'react';
import { FaCode } from 'react-icons/fa';
import { SiMaterialdesign, SiGoogleanalytics } from 'react-icons/si';

const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: 'web development',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu scelerisque etiam amet, mauris dictum arcu. Laoreet ut.',
  },
  {
    id: 2,
    icon: <SiMaterialdesign className="service-icon" />,
    title: 'ux-ui design',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu scelerisque etiam amet, mauris dictum arcu. Laoreet ut.',
  },
  {
    id: 3,
    icon: <SiGoogleanalytics className="service-icon" />,
    title: 'seo & analytics',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu scelerisque etiam amet, mauris dictum arcu. Laoreet ut.',
  },
];

export default services;
