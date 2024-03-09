<template>
  <li class="cart">
    <div class="cart_image" :style="{ backgroundColor: color }">
      <img :src="image" :alt="name" />
    </div>
    <div class="cart_data">
      <div class="cart_text">
        <h2>{{ name }}</h2>
        <p>{{ description }}</p>
      </div>
      <div class="cart_actions">
        <strong>{{ qty }}</strong>
        <button @click="removeFromCart">Remove</button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["prodId", "name", "image", "price", "color", "qty"],
  computed: {
    itemTotal() {
      return (this.price * this.qty).toFixed(2);
    },
  },
  methods: {
    removeFromCart() {
      this.$store.dispatch("cart/removeFromCart", { productId: this.prodId });
    },
  },
};
</script>

<style scoped>
.cart {
  padding: 0;
  margin: 0 0 40px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.cart_data {
  display: flex;
  flex-direction: column;
  margin: 0 0 0 0;
}

.cart_image {
  position: relative;
  border-radius: 50%;
  width: 90px;
  height: 90px;
}

.cart_image img {
  width: 80px;
  height: auto;
  position: absolute;
  object-fit: contain;
  transform: rotate(-24deg);
  margin-left: -24px;
}

.cart_text h2 {
  font-size: 24px;
  margin: 1.5rem 0;
}

.cart_text p {
  margin: 1.5rem 0;
  color: #777777;
  font-weight: 400;
}

</style>
