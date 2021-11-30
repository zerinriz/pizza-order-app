const setAmount = (state = [], action) => {
  switch (action.type) {
    case "ADD_AMOUNT":
      return [...state, action.amount];
    default:
      return state;
  }
};

export default setAmount;
