import React, { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkSide from '../../hooks/useDarkSide';

const Switcher = ({className: ClassName}) => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

  const toggleDarkMode = checked => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div className={ClassName}>
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={20} />
      </div>
    </>
  );
}

export default Switcher;