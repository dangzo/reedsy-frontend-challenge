<template>
  <div style="height: 100%">
    <h1>Top books of all time</h1>
    <BookList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BookList from "@/containers/BookList.container.vue";

@Component({
  components: {
    BookList
  }
})
export default class Books extends Vue {}
</script>

<style lang="scss" scoped>
h1 {
  color: $text-color-h1;
  text-align: center;
  font-weight: 900;
  margin: 15px auto;
  position: relative;
  top: 15px;

  @media (max-width: 500px) {
    line-height: 1em;
    font-size: 30px;
  }
}
</style>
