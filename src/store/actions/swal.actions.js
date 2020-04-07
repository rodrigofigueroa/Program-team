export const openSwal = (state, payload) => {
  return {
    ...state,
    callback: payload.callback,
    title: payload.title,
    bodyText: payload.bodyText,
    open: true,
  };
};

export const closeSwal = (state) => {
  return {
    ...state,
    callback: () => null,
    open: false,
    title: "Titulo",
  };
};
