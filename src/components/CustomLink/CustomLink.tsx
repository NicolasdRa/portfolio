import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { CustomCursorContext } from '../../context/CustomCursorContext';
import { Wrapper } from './CustomLink.styled';

interface Props {
  url: string;
  type: 'link' | 'button' | 'gatsby';
  text: string;
  download?: boolean;
}

const CustomButton: React.FC<Props> = ({ url, type, text, download }) => {
  const { setType } = useContext(CustomCursorContext);

  const componentMap = {
    link: (
      <a href={url} download={download}>
        {text}
      </a>
    ),
    gatsby: <Link to={url}>{text}</Link>,
    button: <button type="submit">{text}</button>,
  };

  return (
    <Wrapper onMouseEnter={() => setType('hover')} onMouseLeave={() => setType('default')}>
      {componentMap[type]}
    </Wrapper>
  );
};

export default CustomButton;

CustomButton.defaultProps = {
  download: false,
};
