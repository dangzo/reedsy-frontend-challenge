<template>
  <div style="height: 100%">
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
