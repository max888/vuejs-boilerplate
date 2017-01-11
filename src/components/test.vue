<template>
  <div class="test">
    <input type="text" v-model="title">
    <h1>{{title}}</h1>
    <p v-if="showName">{{user.firstName}}</p>
    <p v-else="else">nobody</p>
    <ul>
      <li v-for="item in items">{{item.title}}</li>
    </ul>
    <button type="button" v-on:click="greet('helllo world')">Say greeting</button>
    <br />
    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
    <br />
    <label>First Name: </label><input type="text" name="" value="" v-model="user.firstName">
    <label>Last Name Name: </label><input type="text" name="" value="" v-model="user.lastName">
    <h3>{{fullName}}</h3>
    <h2>{{msg}}</h2>
  </div>
</template>
<script>
  export default {
    name: 'test',
    props: {
      msg: {
        type: String,
        default: 'Foobar',
      }
    },
    data () {
      return {
        title: 'Hello World',
        user: {
          firstName: 'max',
          lastName: 'geee'
        },
        showName: false,
        items: [
          {title: 'Item 1'},
          {title: 'Item 2'},
          {title: 'Item 3'},
          {title: 'Item 4'}
        ]
      }
    },
    methods: {
      greet: function (greeting) {
          alert(greeting);
      },
      pressKey: function(e) {
        console.log(e.target.value);
      },
      enterHit: function() {
        console.log('you hit enter');
      }
    },
    computed: {
      fullName: function() {
        return this.user.firstName + ' ' + this.user.lastName
      }
    }
  }
</script>

<style scoped>

</style>
