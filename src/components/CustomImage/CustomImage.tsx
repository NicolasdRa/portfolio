import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { Wrapper } from './CustomImage.styled';

interface CustomImageProps {
  data?: string;
  node?: ImageDataLike;
  name?: string;
  translate?: string;
  isActive?: boolean;
}

const CustomImage: React.FC<CustomImageProps> = ({
  data,
  node,
  name = '',
  translate = '0px, 0px',
  isActive = false,
}) => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current) throw Error('divRef is not assigned');
    const element = imageRef.current;

    gsap.fromTo(
      element,
      {
        opacity: 0,
      },
      {
        duration: 0.3,
        delay: 0.5,
        opacity: 1,
      }
    );
  }, [isActive]);

  const imageData = node ? getImage(node) : null;

  return (
    <Wrapper>
      <div
        style={{ transform: translate, pointerEvents: 'none', willChange: 'transform' }}
        ref={imageRef}
      >
        {imageData ? <GatsbyImage image={imageData} alt={name || ''} /> : <img src={data} alt={name || ''} />}
      </div>
    </Wrapper>
  );
};

export default CustomImage;
