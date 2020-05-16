import React from 'react';

import { Icon } from './icon.styles';
import MenuIcon from './assets/bars-solid.svg';
import CloseIcon from './assets/times-solid.svg';

const IconMapper = {
  MENU: MenuIcon,
  CLOSE: CloseIcon,
};

const IconComponent = (props) => {
  const { onClick, className, icon } = props;
  return (
    <Icon.Container onClick={onClick} className={className}>
      <Icon.SVG>
        <div dangerouslySetInnerHTML={{ __html: IconMapper[icon] }} />
      </Icon.SVG>
    </Icon.Container>
  )
}

export default IconComponent;
