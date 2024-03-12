export default {
  quantityIncrement(context, payload) {
    const prodId = payload.productId;
    const products = context.rootGetters["prods/products"];
    const product = products.find((prod) => prod.id === prodId);
    context.commit("increaseQuantityOfProduct", product);
  },
  quantityDecrement(context, payload) {
    const prodId = payload.productId;
    const products = context.rootGetters["prods/products"];
    const product = products.find((prod) => prod.id === prodId);
    context.commit("decreaseQuantityOfProduct", product);
  },
  addToCart(context, payload) {
    const prodId = payload.productId;
    const products = context.rootGetters["prods/products"];
    const product = products.find((prod) => prod.id === prodId);
    context.commit("addProductToCart", product);
  },
  removeFromCart(context, payload) {
    context.commit("removeProductFromCart", payload);
  },
};
