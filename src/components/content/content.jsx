import React from "react";

import RepoList from "../repo-list/repo-list";
import Repo from "../repo/repo";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedRepo, getInSettings } from "../../store/selectors/selectors";
import { clearSelectedRepo } from "../../store/actions/repos";
import Settings from "../settings/settings";

const Content = () => {
  const dispatch = useDispatch();

  const selectedRepo = useSelector(getSelectedRepo);
  const inSettings = useSelector(getInSettings);

  const onBack = () => dispatch(clearSelectedRepo());

  if (inSettings) return <Settings />

  return selectedRepo === null ? (
    <RepoList />
  ) : (
    <Repo repoData={selectedRepo} onBack={onBack} />
  );
};

export default Content;
