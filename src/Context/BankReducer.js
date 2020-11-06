export default (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    case "INITIALIZE_TRANSACTIONS":
      console.log(action.payload)
      return {
        ...state,
        transactions: action.payload,
      };
    default:
      return state;
  }
};
