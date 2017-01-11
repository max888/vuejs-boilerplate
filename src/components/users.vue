<template>
  <div class="users">
    <h1>Users</h1>
    <form v-on:submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="enter name" name="" value="">
      <br />
      <input type="text" v-model="newUser.email"  placeholder="enther email">
      <input type="submit" name="" value="Submit">
    </form>
    <ul>
      <li v-for="user in users">
        <input type="checkbox" class="toggle" v-model="user.contacted" name="" value="">
        <span :class="{contacted: user.contacted}">
          {{user.name}}: {{user.email}} <button type="button" v-on:click="deleteUser(user)" name="button">X</button>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'users',
    data () {
      return {
          newUser: {},
          users: []
      }
    },
    methods: {
      addUser: function(e) {
        e.preventDefault();
        this.users.push({
          name: this.newUser.name,
          email: this.newUser.email,
          contacted: false
        });
      },
      deleteUser: function(user) {
        this.users.splice(this.users.indexOf(user), 1);
      }
    },
    created: function() {
      // the request will return a promise, so after we use .then
      this.$http.get('https://jsonplaceholder.typicode.com/users')
        .then(function(response) {
          this.users = response.data;
        });
    }
  }
</script>

<style scoped>
  .contacted {
    text-decoration: line-through;
  }
</style>
