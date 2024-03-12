export default {
  products(state) {
    return state.items;
  },
  totalSum(state) {
    return state.total.toFixed(2);
  },
};
