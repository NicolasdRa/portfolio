import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import mytinerary from '../assets/images/myitinerary.jpg';
import clothesShop from '../assets/images/ecommerce.jpg';
import energeniousWebsite from '../assets/images/energeniousWebsite.jpg';
import myDoc from '../assets/images/mydoc.jpg';
import energeniousGUI from '../assets/images/energeniousGui.jpg';
import energeniousAdmin from '../assets/images/energeniousAdmin.gif';
import energeniousSpreadsheet from '../assets/images/energeniousSpreadsheet.jpg';

const data = [
  {
    id: 1,
    title: 'myitinerary',
    summary: 'travel app',
    featured: true,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quas minus facilis esse ipsam, excepturi at quidem autem iste ab tempora a dicta quis! Nobis dolorem odio dicta soluta? Ullam quasi in cum nemo tenetur ad nihil odio incidunt. Omnis perferendis illo, cumque aliquid unde maiores saepe deserunt suscipit quia laborum assumenda aut quasi voluptatibus similique voluptatum accusamus temporibus in delectus molestias id totam, reiciendis eveniet vel. ',
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
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quas minus facilis esse ipsam, excepturi at quidem autem iste ab tempora a dicta quis! Nobis dolorem odio dicta soluta? Ullam quasi in cum nemo tenetur ad nihil odio incidunt. Omnis perferendis illo, cumque aliquid unde maiores saepe deserunt suscipit quia laborum assumenda aut quasi voluptatibus similique voluptatum accusamus temporibus in delectus molestias id totam, reiciendis eveniet vel. ',
    stack: ['React.js', 'Redux.js', 'firebase', 'styled components', 'Stripe payments'],
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
    image: clothesShop,
  },

  {
    id: 3,
    title: 'energenious website',
    summary: 'website revamp',
    featured: true,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quas minus facilis esse ipsam, excepturi at quidem autem iste ab tempora a dicta quis! Nobis dolorem odio dicta soluta? Ullam quasi in cum nemo tenetur ad nihil odio incidunt. Omnis perferendis illo, cumque aliquid unde maiores saepe deserunt suscipit quia laborum assumenda aut quasi voluptatibus similique voluptatum accusamus temporibus in delectus molestias id totam, reiciendis eveniet vel. ',
    stack: ['Wordpress', 'HTML5', 'CSS3'],
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
    image: energeniousWebsite,
  },

  {
    id: 4,
    title: 'MyDoc',
    summary: 'appointments app',
    featured: true,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quas minus facilis esse ipsam, excepturi at quidem autem iste ab tempora a dicta quis! Nobis dolorem odio dicta soluta? Ullam quasi in cum nemo tenetur ad nihil odio incidunt. Omnis perferendis illo, cumque aliquid unde maiores saepe deserunt suscipit quia laborum assumenda aut quasi voluptatibus similique voluptatum accusamus temporibus in delectus molestias id totam, reiciendis eveniet vel. ',
    stack: ['Typescript', 'React.js', 'Redux.js', 'Material-UI'],
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
    image: myDoc,
  },

  {
    id: 5,
    title: 'Micogrid Creator UX-UI re-design',
    summary: 'UX-UI re-design, energenious flagship product',
    featured: true,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quas minus facilis esse ipsam, excepturi at quidem autem iste ab tempora a dicta quis! Nobis dolorem odio dicta soluta? Ullam quasi in cum nemo tenetur ad nihil odio incidunt. Omnis perferendis illo, cumque aliquid unde maiores saepe deserunt suscipit quia laborum assumenda aut quasi voluptatibus similique voluptatum accusamus temporibus in delectus molestias id totam, reiciendis eveniet vel. ',
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
    title: 'Account management app - energenious',
    summary: 'User portal, login and account management app',
    featured: true,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quas minus facilis esse ipsam, excepturi at quidem autem iste ab tempora a dicta quis! Nobis dolorem odio dicta soluta? Ullam quasi in cum nemo tenetur ad nihil odio incidunt. Omnis perferendis illo, cumque aliquid unde maiores saepe deserunt suscipit quia laborum assumenda aut quasi voluptatibus similique voluptatum accusamus temporibus in delectus molestias id totam, reiciendis eveniet vel. ',
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
    summary: 'react based spreadsheet widget, design and development',
    featured: true,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quas minus facilis esse ipsam, excepturi at quidem autem iste ab tempora a dicta quis! Nobis dolorem odio dicta soluta? Ullam quasi in cum nemo tenetur ad nihil odio incidunt. Omnis perferendis illo, cumque aliquid unde maiores saepe deserunt suscipit quia laborum assumenda aut quasi voluptatibus similique voluptatum accusamus temporibus in delectus molestias id totam, reiciendis eveniet vel. ',
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
    image: energeniousSpreadsheet,
  },
];

export default data;
