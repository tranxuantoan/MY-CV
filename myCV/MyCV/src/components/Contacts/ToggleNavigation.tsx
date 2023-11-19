import React from 'react';
import IconExample from './icon';

const ToggleNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu}><IconExample/></button>
      {isMenuOpen && (
        <ul>
          <li>Menu item 1</li>
          <li>Menu item 2</li>
          <li>Menu item 3</li>
        </ul>
      )}
    </div>
  );
};

export default ToggleNavigation;