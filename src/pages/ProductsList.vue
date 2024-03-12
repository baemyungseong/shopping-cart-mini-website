<template>
  <base-card>
    <header>
      <img class="logo" src="../assets/nike.png" alt="nike logo" />
      <h1 class="heading">Our Products</h1>
    </header>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <ul id="products_list" v-else>
      <product-item
        v-for="prod in products"
        :key="prod.id"
        :id="prod.id"
        :name="prod.name"
        :image="prod.image"
        :description="prod.description"
        :price="prod.price"
        :color="prod.color"
      ></product-item>
    </ul>
  </base-card>
</template>

<script>
import ProductItem from "../components/products/ProductItem.vue";

export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    products() {
      return this.$store.getters["prods/products"];
    },
  },
  created() {
    this.loadProducts();
  },
  methods: {
    async loadProducts() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("prods/loadProducts");
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.logo {
  width: auto;
  height: 28px;
}

.heading {
  color: #303841;
  font-size: 32px;
  margin: 16px 0 0 0;
}

#products_list {
  list-style: none;
  padding: 0;
  overflow: scroll;
  height: 38vh;
}
</style>
