import React from "react";
import DropDown from "../dropdown";
import { useTheme } from "../../contexts/themeContext";
import { useLanguage } from "../../contexts/languageContext";

import "./style.css";
const DropdownBar = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const dogDropDown = [
    { text: "Toy", link: "/products?animal=dog&cateogry=toy" },
    { text: "Beds", link: "/products?animal=dog&cateogry=bed" },
    { text: "Food", link: "/products?animal=dog&cateogry=food" },
    { text: "Jacket", link: "/products?animal=dog&cateogry=jacket" },
    { text: "Leash", link: "/products?animal=dog&cateogry=leash" },
    { text: "Collar's", link: "/products?animal=dog&cateogry=collar" },
  ];
  const catDropDown = [
    { text: "Toy", link: "/products?animal=cat&cateogry=toy" },
    { text: "Leash", link: "/products?animal=cat&cateogry=leash" },
    { text: "Jacket", link: "/products?animal=cat&cateogry=jacket" },
    { text: "Food", link: "/products?animal=cat&cateogry=food" },
  ];
  const birdDropDown = [
    { text: "Home", link: "/products?animal=bird&cateogry=home" },
    { text: "Food", link: "/products?animal=bird&cateogry=food" },
  ];
  const reptileDropDown = [
    { text: "Home", link: "/products?animal=reptile&cateogry=home" },
    { text: "Food", link: "/products?animal=reptile&cateogry=food" },
  ];
  const fishDropDown = [
    { text: "Food", link: "/products?animal=fish&cateogry=food" },
    { text: "Aquarium", link: "/products?animal=fish&cateogry=aquarium" },
  ];
  return (
    <div
      className="dropdownBar"
      style={{ backgroundColor: theme.highLightBackground }}
    >
      <DropDown title={language.dog} item={dogDropDown} />
      <DropDown title={language.cat} item={catDropDown} />
      <DropDown title={language.bird} item={birdDropDown} />
      <DropDown title={language.reptile} item={reptileDropDown} />
      <DropDown title={language.fish} item={fishDropDown} />
    </div>
  );
};

export default DropdownBar;
