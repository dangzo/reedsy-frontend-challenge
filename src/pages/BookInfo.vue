<template>
  <div style="height: 100%">
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

