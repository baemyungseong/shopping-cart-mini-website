export default {
  addProductToCart(state, payload) {
    const productData = payload;
    const productInCartIndex = state.items.findIndex(
      (cartItem) => cartItem.productId === productData.id
    );

    if (productInCartIndex >= 0) {
      state.items[productInCartIndex].qty++;
    } else {
      const newItem = {
        productId: productData.id,
        name: productData.name,
        image: productData.image,
        price: productData.price,
        color: productData.color,
        qty: 1,
      };
      state.items.push(newItem);
    }
    state.total += productData.price;
  },

  removeProductFromCart(state, payload) {
    const prodId = payload.productId;
    const productInCartIndex = state.items.findIndex(
      (cartItem) => cartItem.productId === prodId
    );
    const prodData = state.items[productInCartIndex];
    state.items.splice(productInCartIndex, 1);
    state.total -= prodData.price * prodData.qty;
  },

  increaseQuantityOfProduct(state, payload) {
    const productData = payload;
    const productInCartIndex = state.items.findIndex(
      (cartItem) => cartItem.productId === productData.id
    );
    state.items[productInCartIndex].qty++;
    state.total += productData.price;
  },

  decreaseQuantityOfProduct(state, payload) {
    const productData = payload;
    const productInCartIndex = state.items.findIndex(
      (cartItem) => cartItem.productId === productData.id
    );
    state.items[productInCartIndex].qty--;
    if (state.items[productInCartIndex].qty == 0) {
      state.items.splice(productInCartIndex, 1);
    }
    state.total -= productData.price;
  },
};
