<template>
  <div class="latest-posts">
  <img v-if="!loaded" src="../assets/images/sponge.gif" alt="">
    <ul>
      <li v-for="post in latestPosts">
        <router-link :to="'blog/' + post.id.toString()" >{{post.id}}{{post.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'latest-posts',
  data() {
    return {
      latestPosts: [],
      loaded: false
    }
  },
  created: function() {
    // the request will return a promise, so after we use .then
    this.$http.get('https://jsonplaceholder.typicode.com/posts')
      .then(function(response) {
        this.latestPosts = response.data;
        this.loaded = true;
      });
  },

  methods: {

  }
}
</script>

<style>

</style>
