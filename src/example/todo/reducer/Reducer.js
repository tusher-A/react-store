export const todos = [];

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      return [...state, payload];
    case "DELETE":
      return state.filter(todo => todo !== payload);
    default:
      return state;
  }
};

export default reducer;
