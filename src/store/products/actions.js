export default {
  async loadProducts(context) {
    const response = await fetch(
      `https://shopping-cart-mini-website-default-rtdb.asia-southeast1.firebasedatabase.app/shoes.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }

    const products = [];

    for (const key in responseData) {
      const product = {
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        image: responseData[key].image,
        price: responseData[key].price,
        color: responseData[key].color,
      };
      products.push(product);
    }

    context.commit("setProducts", products);
  },
};
