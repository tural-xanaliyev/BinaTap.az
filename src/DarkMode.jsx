import React from "react";
import Sun from './assets/svg/sun.svg'
import Moon from './assets/svg/moon.svg'
const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  };

  const selectedTheme = localStorage.getItem("theme");

  if (selectedTheme === "dark") {
    setDarkMode();
  }



  const toggleThem = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }

  };
  return (
    <div className="btn-container">
      <img src={Sun} alt="Light" />
      <label className="switch btn-color-mode-switch">
        <input value="1" id="color_mode" name="color_mode" type="checkbox" onChange={toggleThem} defaultChecked={selectedTheme==='dark'}/>
          <label className="btn-color-mode-switch-inner" data-off="Light" data-on="Dark" htmlFor="color_mode"></label>
      </label>
      <img src={Moon} alt="Dark" />
    </div>
  );
};

export default DarkMode;
