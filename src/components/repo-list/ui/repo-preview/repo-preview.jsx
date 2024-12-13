import React from "react";

import styles from "./repo-preview.module.css";
import RepoStats from "../../../repo-stats/repo-stats";

const RepoPreview = (props) => (
  <div className={`box ${styles.repoPreview}`}>
    <div className="title">{props.repo.name}</div>
    <div className={styles.content}>
      <RepoStats starCount={props.repo.stargazers_count} forkCount={props.repo.forks_count} />
      <button onClick={props.onSelectRepo}>Show</button>
    </div>
  </div>
);

export default RepoPreview;
