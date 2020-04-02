export const updateVisibleContact = (state, payload) => {
  const stateP = payload.state;
  return {
    ...state,
    ...stateP
  };
};
