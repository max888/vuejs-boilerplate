<template>
  <div class="blog-post">
    <h2>Here's a single blog post</h2>
    this is post number {{ currentPost.id }}
    <br>
    content:
    <br>
    <img v-if="!loaded" src="../assets/Loading_icon.gif" alt="">
    {{currentPost.body}}
    <br>
    <!-- <button type="button" name="button" v-on:click="nextPost(currentPost.id)">Next</button> -->
    <router-link :to="nextPost" >Next</router-link>
  </div>
</template>

<script>
export default {

  name: 'blog-post',
  watch: {
    '$route' (to, from) {

    }
  },
  data() {
    return {
      currentPost: {},
      loaded: false,
      nextPost: ""
    }
  },
  methods: {
      // nextPost: function(currentId) {
      //   console.log(currentId);
      //   var nextPostId = (currentId + 1).toString();
      //  var nextUrl = "blog/" + nextPostId;
      //  console.log(nextUrl);
      //  this.$router.go(nextPostId);
      //
      // }
  },
  created: function() {
    var currentID = this.$route.params.id;
    var postUrl = "https://jsonplaceholder.typicode.com/posts/" + currentID;
    // the request will return a promise, so after we use .then
    this.$http.get(postUrl)
      .then(function(response) {
        this.currentPost= response.data;
        this.nextPost = (this.currentPost.id + 1).toString();
        console.log(this.nextPost);
        this.loaded = true;
      });
  },
}
</script>

<style>

</style>
