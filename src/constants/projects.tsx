import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import mytinerary from '../assets/images/projects/myitinerary.jpg';
import clothesShop from '../assets/images/projects/ecommerce.jpg';
import energeniousWebsite from '../assets/images/projects/energeniousWebsite.jpg';
import myDoc from '../assets/images/projects/mydoc.jpg';
import energeniousGUI from '../assets/images/projects/energeniousGui.jpg';
import energeniousAdmin from '../assets/images/projects/energeniousAdmin2.jpg';
import energeniousSpreadsheet from '../assets/images/projects/energeniousSpreadsheet.jpg';

const data = [
  {
    id: 1,
    title: 'myitinerary',
    summary: 'travel app',
    featured: true,
    description:
      'Travel SPA, frontend developed in React with Redux (RTK) for state management and Material-UI for the user Interface. Backend developed in Node.js, Express.js & MongoDB. Full CRUD functionality, authentication and authorization (credentials & oauth), password reset, image upload, content creation and update functionalities where users can create and edit their profiles, custom travel itineraries, comments, reviews and favourites.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux.js', 'Material-UI'],
    links: [
      {
        icon: <FaGithub className="social-icon" />,
        url: 'https://github.com/NicolasdRa/travel-App-Mytinerary',
      },
      {
        icon: <MdWeb className="social-icon" />,
        url: '',
      },
    ],
    image: mytinerary,
  },

  {
    id: 2,
    title: 'clothes shop',
    summary: 'e-commerce app',
    featured: true,
    description:
      'E-commerce App with fully functional shopping-cart and Integration with Stripe developed in React with Redux, with Firebase for backend and database and a mix of Styled Components and SASS.',
    stack: ['React.js', 'Redux.js', 'firebase', 'styled components', 'stripe'],
    links: [
      {
        icon: <FaGithub className="social-icon" />,
        url: 'https://github.com/NicolasdRa/e-commerce-app',
      },
      {
        icon: <MdWeb className="social-icon" />,
        url: '',
      },
    ],
    image: clothesShop,
  },

  {
    id: 3,
    title: 'energenious website',
    summary: 'website revamp',
    featured: true,
    description: 'Company website responsive re-design and implementation in wordpress.',
    stack: ['Wordpress', 'HTML5', 'CSS3'],
    links: [
      {
        icon: <FaGithub className="social-icon" />,
        url: 'https://energenious.eu/',
      },
      {
        icon: <MdWeb className="social-icon" />,
        url: '',
      },
    ],
    image: energeniousWebsite,
  },

  {
    id: 4,
    title: 'MyDoc',
    summary: 'appointments app',
    featured: true,
    description:
      'Appoinments app to browse over a list of available practitioners, book and manage appointments. ',
    stack: ['Typescript', 'React.js', 'Redux.js', 'Material-UI'],
    links: [
      {
        icon: <FaGithub className="social-icon" />,
        url: 'https://github.com/NicolasdRa/appointments-app',
      },
      {
        icon: <MdWeb className="social-icon" />,
        url: '',
      },
    ],
    image: myDoc,
  },

  {
    id: 5,
    title: 'Micogrid Creator - Energenious',
    summary: 'UX-UI re-design, energenious flagship product',
    featured: true,
    description: "Re-designed of the company's flagship product's UI and UX",
    stack: ['Figma'],
    links: [
      {
        icon: <FaGithub className="social-icon" />,
        url: 'https://github.com/NicolasdRa/travel-App-Mytinerary',
      },
      {
        icon: <MdWeb className="social-icon" />,
        url: '',
      },
    ],
    image: energeniousGUI,
  },

  {
    id: 6,
    title: 'Account management app - Energenious',
    summary: 'User portal, login and account management app',
    featured: true,
    description:
      'Design and implementation of user portal with login/signup functionality, SSO for all products, account management functionalities. Developed in React.js, Redux and Material UI. ',
    stack: ['React.js', 'Redux.js', 'Material-UI', 'Figma'],
    links: [
      {
        icon: <FaGithub className="social-icon" />,
        url: 'https://github.com/NicolasdRa/travel-App-Mytinerary',
      },
      {
        icon: <MdWeb className="social-icon" />,
        url: '',
      },
    ],
    image: energeniousAdmin,
  },
  {
    id: 7,
    title: 'spreadhseet widget - energenious',
    summary: 'spreadsheet widget, design and development',
    featured: true,
    description:
      'Design and partial implementation of Spreadsheet widget developed in Typescript and React with Material UI. ',
    stack: ['React.js', 'Typescript', 'Redux.js', 'Material-UI', 'Figma'],
    links: [
      {
        icon: <FaGithub className="social-icon" />,
        url: 'https://github.com/NicolasdRa/travel-App-Mytinerary',
      },
      {
        icon: <MdWeb className="social-icon" />,
        url: '',
      },
    ],
    image: energeniousSpreadsheet,
  },
];

export default data;
