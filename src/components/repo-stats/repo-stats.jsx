import React from "react";
import { useSelector } from "react-redux";

import { getStarVisible, getForkVisible } from "../../store/selectors/selectors";

import styles from "./repo-stats.module.css";

const RepoStats = (props) => {
  const isStarVisible = useSelector(getStarVisible);
  const isForkVisible = useSelector(getForkVisible);

  if (!isStarVisible && !isForkVisible) return <></>;

  return (
    <div>
      {
        isStarVisible ?
          <div>
            <i className={`fas fa-star ${styles.icon}`}></i>
            {props.starCount} stars
          </div>
        :
        <></>
      }
      {
        isForkVisible ?
          <div>
            <i className={`fas fa-code-branch ${styles.icon}`}></i>
            {props.forkCount} forks
          </div>
        :
        <></>
      }
    </div>
  )
};

export default RepoStats;
