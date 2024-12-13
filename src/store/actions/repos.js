export const fetchRepos = () => ({
  type: "FETCH_REPOS",
});

export const fetchReposStart = () => ({
  type: "FETCH_REPOS_START",
  repos: [],
});

export const fetchReposSuccess = (repos) => ({
  type: "FETCH_REPOS_SUCCESS",
  repos: repos,
});

export const fetchReposFail = (error) => ({
  type: "FETCH_REPOS_FAIL",
  error: error,
});

export const setSelectedUserName = (userName) => ({
  type: "SET_SELECTED_USER_NAME",
  userName: userName,
});

export const selectRepo = (repoId) => ({
  type: "SELECT_REPO",
  repoId: repoId,
});

export const clearSelectedRepo = () => ({
  type: "CLEAR_SELECTED_REPO",
});

export const prevPage = () => ({
  type: "PREV_PAGE",
});

export const nextPage = () => ({
  type: "NEXT_PAGE",
});

export const setInSettings = (inSettings) => ({
  type: "SET_IN_SETTINGS",
  inSettings: inSettings,
});

export const setStarVisibility = (isVisible) => ({
  type: "SET_STAR_VISIBILITY",
  isStarVisible: isVisible,
});

export const setForkVisibility = (isVisible) => ({
  type: "SET_FORK_VISIBILITY",
  isForkVisible: isVisible,
});

export const setWatcherVisibility = (isVisible) => ({
  type: "SET_WATCHER_VISIBILITY",
  isWatcherVisible: isVisible,
});
