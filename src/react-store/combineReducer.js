const combineReducer = reducers => {
  const finalReducers = {};

  Object.keys(reducers).forEach(key => {
    if (typeof reducers[key] === "function") finalReducers[key] = reducers[key];
    else throw new Error(`${key} reducer must be a function`);
  });
  const finalReducerKeys = Object.keys(finalReducers);

  return (state, action) => {
    let hasChanged = false;
    const nextState = {};
    finalReducerKeys.forEach(key => {
      const reducer = finalReducers[key];
      const previousStateForKey = state[key];

      const nextStateForKey = reducer(previousStateForKey, action);
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    });

    hasChanged =
      hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
};

export default combineReducer;
