<template>
  <div class="blog-post container">
    <h2>{{currentPost.title}}</h2>
    <p>this is post number {{ currentPost.id }}</p>
    <br>
    content:
    <br>
    <img v-if="!loaded" src="../assets/images/sponge.gif" alt="">
    {{currentPost.body}}
    <br>
    <!-- <button type="button" name="button" v-on:click="nextPost(currentPost.id)">Next</button> -->
    <router-link :to="nextPost" >Next {{nextPost}}</router-link><br>
    <router-link :to="prevPost" >Prev {{prevPost}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'blog-post',
  watch: {
    '$route' (to, from) {
      var currentID = this.$route.params.id;
      var postUrl = "https://jsonplaceholder.typicode.com/posts/" + currentID;
      // the request will return a promise, so after we use .then
      this.$http.get(postUrl)
        .then(function(response) {
          this.currentPost= response.data;
          this.nextPost = (this.currentPost.id + 1).toString();
          this.prevPost = (this.currentPost.id - 1).toString();
          console.log(this.currentPost);
          this.loaded = true;
        });
    }
  },
  data() {
    return {
      currentPost: {},
      loaded: false,
      nextPost: "",
      prevPost: ""
    }
  },
  methods: {

  },
  created: function() {
    var currentID = this.$route.params.id;
    var postUrl = "https://jsonplaceholder.typicode.com/posts/" + currentID;
    // the request will return a promise, so after we use .then
    this.$http.get(postUrl)
      .then(function(response) {
        this.currentPost= response.data;
        this.nextPost = (this.currentPost.id + 1).toString();
        this.prevPost = (this.currentPost.id - 1).toString();
        console.log(this.currentPost);
        this.loaded = true;
      });
  },
}
</script>

<style>

</style>
