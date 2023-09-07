<template>
    <div>
        <!-- Button trigger modal -->
        <button type="button" class="btn" @click="openEditModal(userData.userID)" data-bs-toggle="modal"
            :data-bs-target="'#texampleModal' + userData.userID">
            edit
        </button>

        <!-- Modal -->
        <div class="modal fade" :id="'texampleModal' + userData.userID" tabindex="-1"
            :aria-labelledby="'texampleModalLabel' + userData.userID" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="texampleModalLabel3">
                            update your information
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <label>first name:</label>
                        <input type="text" placeholder="first name" v-model="editingUser.firstName" />
                        <label>last name:</label>
                        <input type="text" placeholder="last name" v-model="editingUser.lastName" />
                        <label>age:</label>
                        <input type="text" placeholder="age" v-model="editingUser.age" />
                        <label>gender:</label>
                        <input type="text" placeholder="gender" v-model="editingUser.gender" />
                        <label>email address:</label>
                        <input type="text" placeholder="email address" v-model="editingUser.emailAdd" />
                        <label>user role:</label>
                        <input type="text" placeholder="role" v-model="editingUser.userRole" />
                        <label>user profile:</label>
                        <input type="text" placeholder="profile image" v-model="editingUser.userURL" />
                        <label>user password:</label>
                        <input type="text" placeholder="password" v-model="editingUser.userPass" />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button type="button" class="btn" @click="updateUser(userData.userID)">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["userData"],
    data() {
        return {
            editingUser: {
                ...this.userData,
            },
            editingUserID: null,
            model: {
                user: {
                    firstName: "",
                    lastName: "",
                    age: "",
                    gender: "",
                    emailAdd: "",
                    userRole: "",
                    userURL: "",
                    userPass: ""
                },
            },
        };
    },
    computed: {
        thisUser() {
            return this.$store.state.userData;
        },
    },
    methods: {
        openEditModal(id) {
            this.editingUserID = id;
        },
        async updateUser(id) {
            try {
                await this.$store.dispatch("updateUser", {
                        userID: id,
                        data: { ...this.editingUser },
                    })
            } catch (e) {
                console.log(e)
            }
        },
    },
};
</script>

<style scoped>
input {
    width: 100%;
    height: 3rem;
    margin-bottom: 2rem;
  }

  button {
    padding: .5rem;
    width: 5rem;
    border: 2px solid #759e8f;
    background-color: #5C8374;
    color: white;
    margin-bottom: 1rem;
    font-weight: bolder;
    border-radius: 5rem;
  }

  button:hover{
    background-color: #93b1a6;
  }
</style>