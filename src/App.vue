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
@import 'assets/styles/vendors/bootstrap.min.scss';
@import 'assets/styles/scss/style.scss';
nav {
  padding-top: 31px;
  padding-bottom: 44px;
  ul, li {
    list-style: none;
    margin: 0px;
    padding: 0px;
    display: flex;
    justify-content: center;

  }
  li {
    font-family: $bungee;
    width: 33%;
    font-size: 35px;
    line-height: 45px;
    a {
      color: $blue;
    }

  }
}
</style>
