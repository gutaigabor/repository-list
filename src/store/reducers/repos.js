import {
  clearSelectedRepo,
  fetchRepos,
  fetchReposFail,
  fetchReposStart,
  fetchReposSuccess,
  nextPage,
  prevPage,
  selectRepo,
  setSelectedUserName,
  setInSettings,
  setStarVisibility,
  setForkVisibility,
  setWatcherVisibility
} from "../actions/repos";

const initialState = {
  repos: [],
  loading: false,
  error: null,
  selectedRepo: null,
  selectedPage: 1,
  selectedUserName: "",
  inSettings: false,
  isStarVisible: true,
  isForkVisible: true,
  isWatcherVisible: false,
};

const _fetchRepos = (state) => ({
  ...state,
  selectedPage: 1,
});

const _fetchReposStart = (state) => ({
  ...state,
  loading: true,
  selectedRepo: null,
});

const _setSelectedUserName = (state, { userName }) => ({
  ...state,
  selectedUserName: userName,
});

const _fetchReposSuccess = (state, { repos }) => ({
  ...state,
  loading: false,
  repos: repos,
});

const _fetchReposFail = (state, { error }) => ({
  ...state,
  loading: false,
  repos: [],
  error: error,
});

const _selectRepo = (state, { repoId }) => ({
  ...state,
  selectedRepo:
    repoId === null
      ? null
      : state.repos.filter((repo) => {
          return repo.id === repoId;
        })[0],
});

const _clearSelectRepo = (state) => ({
  ...state,
  selectedRepo: null,
});

const _nextPage = (state) => ({
  ...state,
  selectedPage: state.selectedPage + 1,
});

const _prevPage = (state) => ({
  ...state,
  selectedPage: state.selectedPage - 1,
});

const _setInSettings = (state, { inSettings }) => ({
  ...state,
  inSettings: inSettings,
});

const _setStarVisibility = (state, { isStarVisible }) => ({
  ...state,
  isStarVisible: isStarVisible,
});

const _setForkVisibility = (state, { isForkVisible }) => ({
  ...state,
  isForkVisible: isForkVisible,
});

const _setWatcherVisibility = (state, { isWatcherVisible }) => ({
  ...state,
  isWatcherVisible: isWatcherVisible,
});

const reducers = {
  [fetchRepos().type]: _fetchRepos,
  [fetchReposStart().type]: _fetchReposStart,
  [setSelectedUserName().type]: _setSelectedUserName,
  [fetchReposSuccess().type]: _fetchReposSuccess,
  [fetchReposFail().type]: _fetchReposFail,
  [selectRepo().type]: _selectRepo,
  [clearSelectedRepo().type]: _clearSelectRepo,
  [nextPage().type]: _nextPage,
  [prevPage().type]: _prevPage,
  [setInSettings().type]: _setInSettings,
  [setStarVisibility().type]: _setStarVisibility,
  [setForkVisibility().type]: _setForkVisibility,
  [setWatcherVisibility().type]: _setWatcherVisibility,
};

const reducer = (state = initialState, action) =>
  reducers[action.type] ? reducers[action.type](state, action) : state;

export default reducer;
