import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Switch from '../switch/switch'

import { setInSettings, setStarVisibility, setForkVisibility, setWatcherVisibility } from "../../store/actions/repos";
import { getStarVisible, getForkVisible, getWatcherVisible } from "../../store/selectors/selectors";

import styles from "./settings.module.css";

const Settings = () => {
  const dispatch = useDispatch();

  const isStarVisible = useSelector(getStarVisible);
  const isForkVisible = useSelector(getForkVisible);
  const isWatcherVisible = useSelector(getWatcherVisible);

  const handleClickBack = useCallback(() => {
    dispatch(setInSettings(false));
  }, [dispatch]);

  const handleSetStarVisible = useCallback(() => {
    dispatch(setStarVisibility(!isStarVisible));
  }, [dispatch, isStarVisible]);

  const handleSetForkVisible = useCallback(() => {
    dispatch(setForkVisibility(!isForkVisible));
  }, [dispatch, isForkVisible]);

  const handleSetWatcherVisible = useCallback(() => {
    dispatch(setWatcherVisibility(!isWatcherVisible));
  }, [dispatch, isWatcherVisible]);

  return (
    <div className={styles.container}>
      <div className="box box--wide">
        <div className="title">Settings</div>
        <Switch onChange={handleSetStarVisible} checked={isStarVisible} label='Show stars' />
        <Switch onChange={handleSetForkVisible} checked={isForkVisible} label='Show forks' />
        <Switch onChange={handleSetWatcherVisible} checked={isWatcherVisible} label='Show watchers' />
      </div>
      <button onClick={handleClickBack}>Back</button>
    </div>
  )
};

export default Settings;