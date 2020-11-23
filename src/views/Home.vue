<template>
  <div class="home">
    <yandex-map :coords="coords" :zoom="10" @click="onClick" ymap-class="red">
      <ymap-marker :coords="coords" marker-id="123" hint-content="some hint" />
    </yandex-map>
  </div>
</template>

<script>
export default {
  data: () => ({
    coords: [54.82896654088406, 39.831893822753904],
  }),
  methods: {
    onClick(e) {
      this.coords = e.get("coords");
    },
  },
};
</script>

<style lang="scss">
.red{
  height: 100vh;
  width: 100%;
}
</style>	
