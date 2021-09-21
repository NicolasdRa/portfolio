import React, { useState } from 'react';
import { PageProps } from 'gatsby';
// import { getImage } from 'gatsby-plugin-image';
// import { BgImage } from 'gbimage-bridge';
import { GlobalStyle } from '../../style/GlobalStyle';
import { SEO } from '../SEO/SEO';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import SocialLinks from '../SocialLinks/SocialLinks';

export const Layout: React.FC<Omit<PageProps, 'children'>> = ({ children, location }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  // const { bgImage1, bgImage2, bgImage3 } = useStaticQuery(
  //   graphql`
  //     query {
  //       bgImage1: file(relativePath: { eq: "drop-hero2.png" }) {
  //         id
  //         childImageSharp {
  //           gatsbyImageData(width: 1000, webpOptions: { quality: 70 }, quality: 50)
  //         }
  //       }

  //       bgImage2: file(relativePath: { eq: "drop-contact.png" }) {
  //         id
  //         childImageSharp {
  //           gatsbyImageData(width: 1000, webpOptions: { quality: 70 }, quality: 50)
  //         }
  //       }

  //       bgImage3: file(relativePath: { eq: "sea-all5.png" }) {
  //         id
  //         childImageSharp {
  //           gatsbyImageData(width: 1000, webpOptions: { quality: 90 }, quality: 50)
  //         }
  //       }
  //     }
  //   `
  // );

  // // const image1 = getImage(bgImage1);
  // // const image2 = getImage(bgImage2);
  // const image3 = getImage(bgImage3);

  return (
    <>
      <GlobalStyle />
      <SEO location={location} />
      {/* <BgImage image={image3}> */}
      <Navbar toggleSideBar={toggleSideBar} />
      {children}
      <SocialLinks />
      <Footer />
      {/* </BgImage> */}
    </>
  );
};
