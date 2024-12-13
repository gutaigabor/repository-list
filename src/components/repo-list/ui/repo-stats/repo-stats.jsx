import React from "react";

import styles from "./repo-stats.module.css";

const RepoStats = (props) => (
  <div>
    <div>
      <i className={`fas fa-star ${styles.icon}`}></i>
      {props.starCount} stars
    </div>
    <div>
      <i className={`fas fa-code-branch ${styles.icon}`}></i>
      {props.forkCount} forks
    </div>
  </div>
);

export default RepoStats;
