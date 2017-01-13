<template>
  <div class="blog container">
    <h1>{{headerText}}</h1>
    <h2>Latest Posts:</h2>
    <latest-posts></latest-posts>
  </div>
</template>

<script>
import LatestPosts from './latestPosts'
export default {
  name: 'blog',
  components: {
    LatestPosts
  },
  data() {
    return {
      headerText: 'Whatever happened to Blog and Roll'
    }
  }
}
</script>

<style>

</style>
