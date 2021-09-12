import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';

const BackgroundImage = () => {
  const image = useStaticQuery(
    graphql`
      query {
        imageSharp {
          gatsbyImageData(width: 2000, quality: 50, webpOptions: { quality: 70 })
        }
      }
    `
  );
  const pluginImage = getImage(image);

  return (
    <BgImage image={pluginImage}>
      <div>Hello from BgImage!</div>
    </BgImage>
  );
};

export default BackgroundImage;
