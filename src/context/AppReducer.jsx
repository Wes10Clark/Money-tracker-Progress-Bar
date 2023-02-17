export default (state, action) => {
  switch (action.type) {
    case "ADD_LOG":
      return {
        ...state,
        logs: [action.payload, ...state.logs],
      };
    case "DELETE_LOG":
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
      };
    default:
      return state;
  }
};
