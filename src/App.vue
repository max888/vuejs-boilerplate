<template>
  <div id="app">
    <home></home>
  </div>
</template>
<script>
import Test from './components/test'
import Users from './components/users'
import Home from './components/home'
export default {
  name: 'app',
  components: {
    Test, Users, Home
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background: 	#778899;
}
@import 'assets/styles/vendors/bootstrap.min.scss';
@import 'assets/styles/scss/style.scss';
</style>
