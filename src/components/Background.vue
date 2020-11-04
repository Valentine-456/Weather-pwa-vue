<template>
  <div class="background"></div>
</template>
<script>
export default {
  name: "Background"
};
</script>
<style scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -10;
  background-image: linear-gradient(#82c5c9 , #e8e5b2 80%);
}
</style>