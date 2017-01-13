<template>

  <div class="home">
  <img :src="getPic(1)" >
    <img src="../assets/images/home/200w-1.gif" alt="">
    <div class="container">
      <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
    </div>

  </div>
</template>

<script>
import LatestPosts from './latestPosts'
export default {
  name: 'home-page',
  components: {

  },
  data() {
    return {
      images: []
    }
  },
  created: function() {
    this.images = ['http://placehold.it/350x150', '../assets/images/home/200w-1.gif', '../assets/images/home/200.gif'];
  },
  methods: {
    getPic(index) {
      return 'assets/images/home/200.gif';
    }
  }
}
</script>

<style lang="scss">
h4 {
  font-size: 35px;
  line-height: 45px;
}
</style>
