import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import RepoStats from "../repo-stats/repo-stats";

import styles from "./header.module.css";
import logo from "./../../gitHub-mark-64px.png";
import { fetchRepos, setSelectedUserName, setInSettings } from "../../store/actions/repos";
import { getSelectedUserName } from "../../store/selectors/selectors";
import { getRepoList, getIsLoading, getInSettings } from "../../store/selectors/selectors";

const Header = () => {
  const dispatch = useDispatch();

  const selectedUserName = useSelector(getSelectedUserName);
  const isLoading = useSelector(getIsLoading);
  const repoList = useSelector(getRepoList);
  const inSettings = useSelector(getInSettings);

  const starCount = useMemo(() => repoList.reduce(
    (accumulator, repo) => accumulator + repo.stargazers_count,
    0,
  ), [repoList]);

  const forkCount = useMemo(() => repoList.reduce(
    (accumulator, repo) => accumulator + repo.forks_count,
    0,
  ), [repoList]);

  const handleSearchTextChange = useCallback(
    (event) => {
      dispatch(setSelectedUserName(event.currentTarget.value));
    },
    [dispatch]
  );

  const handleKeyUp = useCallback(
    (event) => {
      if (event.keyCode === 13 && selectedUserName) dispatch(fetchRepos());
    },
    [dispatch, selectedUserName]
  );

  const handleButtonClick = useCallback(() => {
    dispatch(fetchRepos());
  }, [dispatch]);

  const handleSettingsClick = useCallback(() => {
    dispatch(setInSettings(!inSettings));
  }, [dispatch, inSettings]);

  useMemo(() => {
    // TODO: from env
    dispatch(setSelectedUserName('ericelliott'));
    handleButtonClick();
  }, [dispatch, handleButtonClick]);

  const shouldShowRepoStats = !isLoading && repoList && repoList.length > 0;

  return (
    <div className={styles.header}>
      <div className={styles.home}>
        <img src={logo} alt="logo" />
        { shouldShowRepoStats ? <RepoStats starCount={starCount} forkCount={forkCount} /> : <></> }
      </div>
      <div className={styles.menu}>
        <input
          type="text"
          value={selectedUserName}
          placeholder="Enter GitHub user name..."
          onChange={handleSearchTextChange}
          onKeyUp={handleKeyUp}
        />
        <button onClick={handleButtonClick} disabled={selectedUserName === ""}>
          <i className={`fas fa-search ${styles.icon}`}></i> List repos
        </button>
      </div>
      <div onClick={handleSettingsClick}>
        <i className={`fas fa-gear ${styles.settings_icon}`}></i>
      </div>
    </div>
  );
};

export default Header;
