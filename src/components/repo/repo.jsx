import React from "react";

import RepoStats from "../repo-list/ui/repo-stats/repo-stats";

import styles from "./repo.module.css";

const Repo = ({ onBack, repoData: { name, description, forks_count, stargazers_count } }) => (
  <div className={styles.container}>
    <div className="box box--wide">
      <div className="title">{name}</div>
      <RepoStats starCount={stargazers_count} forkCount={forks_count} />
      <div className={styles.content}>{description}</div>
    </div>
    <button onClick={onBack}>Back</button>
  </div>
);

export default Repo;
