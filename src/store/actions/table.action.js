export const updateVisibleColumns = (state, payload) => {
  const stateP = payload.state;
  return {
    ...state,
    stateP
  };
};
