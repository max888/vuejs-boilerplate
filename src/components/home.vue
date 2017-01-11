<template>
  <div class="home">
    <h1>{{headerText}}</h1>
    <h3>{{headerBlurb}}</h3>
    <p>{{mainContent}}</p>
    <h2>Latest Posts:</h2>
    <latest-posts></latest-posts>
  </div>
</template>

<script>
import LatestPosts from './latestPosts'
export default {
  name: 'home-page',
  components: {
    LatestPosts
  },
  data() {
    return {
      headerImageUrl: 'http://socialgarden.com.au/wp-content/uploads/2014/06/digital-marketing-agency.jpg',
      headerText: 'Here is header',
      headerBlurb: 'information about the home page',
      mainContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  }
}
</script>

<style>

</style>
