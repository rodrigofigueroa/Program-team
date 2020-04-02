export const toggleModal = (state, payload) => {
  return {
    ...state,
    ["open" + payload.id]: !state.open
  };
};
