<template>
  <div>
    <center>
      <update :user="user" />
      <button @click="deleteUser(user.userID)">delete</button>
    </center>
  </div>
</template>

<script>
import update from "../components/UpdateUserComp.vue";
export default {
  components: {
    update,
  },
  methods: {
    deleteUser(id) {
      if (confirm("Are you sure you want to delete this user?")) {
        this.$store.dispatch("deleteUser", id);
        setTimeout(() => {
          location.reload();
        }, 500);
      }
    },
  },
};
</script>

<style scoped></style>
