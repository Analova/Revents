export const createReducer = (initialState, fnMap) => {
  return (state = initialState, { type, payload }) => {
    const hander = fnMap[type];

    return hander ? hander(state, payload) : state;
  };
};
