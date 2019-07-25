<template>
  <div class="container">
    <BookDetails />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BookDetails from "@/containers/BookDetails.container.vue";

@Component({
  components: {
    BookDetails
  }
})
export default class BookInfo extends Vue {}
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: 0;
}
</style>
