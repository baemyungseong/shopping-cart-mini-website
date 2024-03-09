<template>
  <li class="product">
    <div class="product_data">
      <div class="product_image" :style="{ backgroundColor: color }">
        <img :src="image" :alt="name" />
      </div>
      <div class="product_text">
        <h2>{{ name }}</h2>
        <p>{{ description }}</p>
      </div>
    </div>
    <div class="product_actions">
      <h3>${{ price }}</h3>
      <button @click="addToCart">ADD TO CART</button>
      <!-- <button class="checked" @click="addToCart">
        <span class="check-icon"></span>
      </button> -->
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "image", "name", "price", "color", "description"],
  methods: {
    addToCart() {
      this.$store.dispatch("cart/addToCart", { id: this.id });
    },
  },
};
</script>

<style scoped>
.product {
  padding: 0;
  margin: 0 0 80px 0;
}

.product_data {
  display: flex;
  flex-direction: column;
}

.product_image {
  border-radius: 28px;
}

.product_image img {
  object-fit: contain;
  width: 100%;
  height: 36vh;
  transform: rotate(-24deg);
  margin-left: -24px;
}

.product_text h2 {
  font-size: 24px;
  margin: 1.5rem 0;
}

.product_text p {
  margin: 1.5rem 0;
  color: #777777;
  font-weight: 400;
}

.product_actions {
  display: flex;
  align-items: center;
  justify-content:space-between;
}

.product_actions h3 {
  margin: 0;
}

button {
  cursor: pointer;
  background-color: #F6C90E;
  color:  #303841;
  padding: 1rem 1.5rem;
  border-radius: 28px;
  font-size: 16px;
  font-weight: 900;
  border: none;
}

button.checked {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

button.checked .check-icon {
  background-image: url("../../assets/check.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 1.5rem;
  height: 1.5rem;
}

button:hover,
button:active {
  background-color: #F6C90E;
  opacity: 0.8;
}
</style>
