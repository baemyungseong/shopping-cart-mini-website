<template>
  <div class="card">
    <div class="circle"></div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  border-radius: 28px;
  box-shadow: 0 1px 16px #aaa;
  padding: 12px 28px;
  margin: 20px 20px;
  width: 32vw;
  background-color: #ffffff;
  overflow: hidden;
}

.circle {
  position: absolute;
  left: -140px;
  top: -80px;
  z-index: 1;
  width: 280px;
  height: 280px;
  background-color: #efc845;
  border-radius: 50%;
}

.content {
  position: relative;
  z-index: 2;
}
</style>
