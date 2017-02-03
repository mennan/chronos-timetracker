import * as types from '../constants/ui';

export const openDescriptionPopup = () => ({
  type: types.OPEN_DESCRIPTION_POPUP,
});

export const closeDescriptionPopup = () => ({
  type: types.CLOSE_DESCRIPTION_POPUP,
});

export const setSidebarType = (value) => ({
  type: types.SET_SIDEBAR_TYPE,
  payload: value,
});

export const setIdleState = (value) => ({
  type: types.SET_IDLE_STATE,
  payload: value,
});