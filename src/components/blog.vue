<template>
  <div class="home">
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
      headerText: 'The blog Page for posts'
    }
  }
}
</script>

<style>

</style>
