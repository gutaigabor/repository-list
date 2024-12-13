import React from "react";
import Switch from "react-switch";

import styles from "./switch.module.css";

const Settings = ({ onChange, checked, label}) => {
  return (
    <div className={styles.home}>
      <Switch onChange={onChange} checked={checked} onColor='#34d058' />
      <span>{label}</span>
    </div>
  )
};

export default Settings;