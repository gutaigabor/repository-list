import React from "react";
import { useSelector } from "react-redux";

import { getStarVisible } from "../../../../store/selectors/selectors";

import styles from "./repo-preview.module.css";
import RepoStats from "../../../repo-stats/repo-stats";

const RepoPreview = (props) => {
  const isStarVisible = useSelector(getStarVisible);

  const isHighlighted = props.repo.stargazers_count > 0 && isStarVisible;

  return (
    <div className={`${isHighlighted ? styles.highlightedBox : 'box'} ${styles.repoPreview}`}>
      <div className="title">{props.repo.name}</div>
      <div className={styles.content}>
        <RepoStats starCount={props.repo.stargazers_count} forkCount={props.repo.forks_count} watcherCount={props.repo.watchers_count}/>
        <button onClick={props.onSelectRepo}>Show</button>
      </div>
    </div>
  )
};

export default RepoPreview;
