<template>
  <div class="container">
    <products-list></products-list>
    <user-cart></user-cart>
  </div>
</template>

<script>
import ProductsList from "./pages/ProductsList.vue";
import UserCart from "./pages/UserCart.vue";

export default {
  components: {
    ProductsList,
    UserCart,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Rubik', sans-serif;
}

body {
  margin: 0;
  background-image: linear-gradient(
    170deg,
    transparent,
    transparent 50%,
    #efc845 20%
  );
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
