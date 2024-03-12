<template>
  <base-card>
    <header>
      <img class="logo" src="../assets/nike.png" alt="nike logo" />
      <div class="cart_information">
        <h1 class="heading">Your Cart</h1>
        <h3>${{ cartTotal }}</h3>
      </div>
    </header>
    <transition-group tag="ul" name="cart-list">
      <cart-item
        v-for="item in cartItems"
        :key="item.productId"
        :prod-id="item.productId"
        :name="item.name"
        :image="item.image"
        :price="item.price"
        :color="item.color"
        :qty="item.qty"
      ></cart-item>
    </transition-group>
  </base-card>
</template>

<script>
import CartItem from "../components/carts/CartItem.vue";

export default {
  components: {
    CartItem,
  },
  computed: {
    cartTotal() {
      return this.$store.getters["cart/totalSum"];
    },
    cartItems() {
      return this.$store.getters["cart/products"];
    },
  },
};
</script>

<style scoped>
.logo {
  width: auto;
  height: 28px;
}

.cart_information {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #303841;
  margin: 16px 0 0 0;
}

.heading {
  font-size: 32px;
  margin: 0;
}

.cart_information h3 {
  font-size: 32px;
  margin: 0;
}

ul {
  list-style: none;
  padding: 0;
  overflow: scroll;
  height: 38vh;
}

.cart-list-enter-from {
  opacity: 0;
  scale: 0;
}

.cart-list-enter-active {
  transition: all 1s ease-out;
}

.cart-list-enter-to,
.cart-list-leave-from {
  opacity: 1;
  scale: 1.0;
}

.cart-list-leave-active {
  transition: all 1s ease-in;
  position: absolute;
}

.cart-list-leave-to {
  opacity: 0;
  scale: 0;
}

.cart-list-move {
  transition: transform 0.8s ease;
}
</style>
