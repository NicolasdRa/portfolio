import React from 'react';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { Wrapper } from './CustomImage.styled';

interface CustomImageProps {
  data?: string;
  node?: ImageDataLike;
  name: string;
  translate?: string;
  isActive?: boolean;
}

const CustomImage: React.FC<CustomImageProps> = ({
  data,
  node = null,
  name = 'photo',
  translate = '0px, 0px',
}) => (
  <Wrapper>
    <div style={{ transform: translate, pointerEvents: 'none', willChange: 'transform' }}>
      {node ? <GatsbyImage image={getImage(node)} alt={name} /> : <img src={data} alt="im" />}
    </div>
  </Wrapper>
);

export default CustomImage;
