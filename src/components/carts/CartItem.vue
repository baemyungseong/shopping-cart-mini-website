<template>
  <li class="cart">
    <div class="cart_image" :style="{ backgroundColor: color }">
      <img :src="image" :alt="name" />
    </div>
    <div class="cart_data">
      <div class="cart_text">
        <h2>{{ name }}</h2>
        <h3>${{ price }}</h3>
      </div>
      <div class="cart_actions">
        <div class="cart_quantity">
          <button class="quantity_button" @click="decreaseQuantity">
            <span class="minus-icon"></span>
          </button>
          <strong class="quantity">{{ qty }}</strong>
          <button class="quantity_button" @click="increaseQuantity">
            <span class="plus-icon"></span>
          </button>
        </div>
        <button class="remove_button" @click="removeFromCart">
          <span class="remove-icon"></span>
        </button>
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
    increaseQuantity() {
      this.$store.dispatch("cart/quantityIncrement", { productId: this.prodId });
    },
    decreaseQuantity() {
      this.$store.dispatch("cart/quantityDecrement", { productId: this.prodId });
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
  justify-content: start;
  margin: 0 0 0 0;
  padding-left: 32px;
  flex-grow: 1;
}

.cart_image {
  position: relative;
  border-radius: 50%;
  width: 90px;
  min-width: 90px;
  height: 90px;
}

.cart_image img {
  width: 128px;
  height: auto;
  position: absolute;
  object-fit: contain;
  transform: rotate(-28deg);
  margin-top: -44px;
  margin-left: -24px;
}

.cart_text h2 {
  font-size: 16px;
  margin: 1rem 0;
}

.cart_quantity {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.cart_quantity .quantity {
  margin: 0 1rem;
  font-weight: 400;
}

.quantity_button {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e1e7ed;
  border: none;
  cursor: pointer;
}

.quantity_button .minus-icon {
  background-image: url("../../assets/minus.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 0.5rem;
  height: 0.5rem;
}

.quantity_button .plus-icon {
  background-image: url("../../assets/plus.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 0.5rem;
  height: 0.5rem;
}

.cart_actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.remove_button {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F6C90E;
  border: none;
  cursor: pointer;
}

.remove_button .remove-icon {
  background-image: url("../../assets/trash.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 0.8rem;
  height: 0.8rem;
}

.remove_button:hover,
.remove_button:active {
  background-color: #F6C90E;
  opacity: 0.8;
}
</style>
