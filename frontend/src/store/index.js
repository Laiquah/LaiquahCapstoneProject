import { createStore } from 'vuex'
import axios from 'axios';
import Cookies from 'js-cookie'
const miniURL = "https://capstone-api-ug52.onrender.com/"

export default createStore({
  state: {
    user: null,
    users: null,
    spinner: null,
    msg:null,
    product: null,
    products: null,
    token: null,
    selectedProduct: null,
    cart: []
  },
  getters: {
    cartTotal: (state) => {
      return state.cart.reduce((total, product) => total + product.prodPrice, 0);
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setUsers(state, users) {
      state.users = users
    },
    setToken(state, token){
      state.token = token
    },
    setSpinner(state, spinner) {
      state.spinner = value
    },
    setMsg(state, msg) {
      state.msg = msg
    },
    setProduct(state, product) {
      state.product = product
    },
    setProducts(state, products) {
      state.products = products
    },
    setLogStatus(state, user) {
      state.user = user
    },
    setRegisterStatus(state, user) {
      state.user = user
    },
    setSelectedProduct(state, product) {
      state.selectedProduct = product
    },
    addToCart(state, product) {
      state.cart.push(product)
    },
    removeFromCart(state, index) {
      state.cart.slipce(index, 1)
    }
  },
  actions: {
    async fetchUser(context) {
      try{
        const { data } = await axios.get(`${miniURL}user`)
        context.commit("setUser", data.results)
      }catch(e) {
        context.commit("setMsg", "an error occured")
      }
    },
    async fetchUsers(context) {
      try{
        const { data } = await axios.get(`${miniURL}users`)
        context.commit("setUsers", data.results)
      }catch(e) {
        context.commit("setMsg", "an error occured")
      }
    },
    async fetchProduct(context) {
      try{
        const { data } = await axios.get(`${miniURL}product`)
        context.commit("setProduct", data.results)
      } catch(e) {
        context.commit("setMsg", "an error occured")
      }
    },
    async fetchProducts(context) {
      try{
        const { data } = await axios.get(`${miniURL}products`)
        context.commit("setProducts", data.results)
      } catch(e) {
        context.commit("setMsg", "an error occured")
      }
    },
    async login(context, payload){
      const {res} = await axios.post(`${miniURL}login`, payload)
      const { err, msg, token, cResult } = res.data
      if(msg === "You are providing the wrong email or password"){
        context.commit("setMsg", "Login Failed")
      } else if(msg === "Logged in successfully" && cResult){
        context.commit("setLogStatus", "Logged in")
        context.commit("setUser", cResult)
        Cookies.set("Logged", token, {
          expires: 2
        })
      } else if(err){
        context.commit("setMsg", "Login Failed")
      }
    },
    async register(context, payload){
      const {res} = await axios.post(`${miniURL}login`, payload)
      const { err, msg, cResult } = res.data
      if(msg === "You are providing the wrong email or password"){
        context.commit("setMsg", "Register Unsuccessful")
      } else if(msg === "Logged in successfully" && cResult){
        context.commit("setRegisterStatus", "Logged in")
        context.commit("setUser", cResult)
      } else if(err){
        context.commit("setMsg", "Login Failed")
      }
    },
    async updateUser(context, payload) {
      console.log(payload)
      try {
        const res = await axios.patch(`${miniURL}user/${payload.userID}`, payload.data);
        const { msg, err } = res.data
        if(msg){
          context.dispatch("fetchUsers")
          context.commit("setUser", msg)
        } else{
          context.commit("setMsg", e)
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async deleteUser(context, id) {
      try {
        const { res } = await axios.delete(`${miniURL}user/${id}`);
        const {msg, err} = res.data
        if(err){
          console.error("An error has occured: ", err)
          context.commit("setMsg", "An error has occured")
        }
        if(msg){
          context.dispatch("fetchUsers")
          context.commit('setUser', msg)
          console.log("User deleted successfully")
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async updateProduct(context, payload) {
      console.log(payload)
      try {
        const res = await axios.patch(`${miniURL}product/${payload.prodID}`, payload);
        const { msg, err } = await res.data;
        console.log(msg, err);
        if (err) {
          console.log("An error has occured: ", err);
          context.commit("setMsg", err);
        }
        if (msg) {
          context.dispatch("fetchProducts")
          context.commit("setProduct", msg);
          context.commit("setMsg", "Successfully updated product.");
        }
      } catch (e) {
        context.commit("setMsg", e);
      }
    },
    async deleteProduct(context, prodID) {
      console.log("reached");
      try {
        const { res } = await axios.delete(`${miniURL}product/${prodID}`);
        const { msg, err } = await res.data;
        if (err) {
          alert("an error has occured, please try again");
        }
        if (msg) {
          context.dispatch("fetchProducts")
          context.commit("setProduct", msg);
          context.commit("setSpinner", false);
        } else {
          context.commit("setMsg", "An error occured");
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    async addProduct(context, payload) {
      console.log("REACHED");
      try {
        const { data } = await axios.post(`${miniURL}product`, payload);
        const { msg, err } = await data;
        console.log(msg, err);
        if (msg) {
          context.dispatch("fetchProducts")
          context.commit("setMsg", msg);
          context.commit("setSpinner", false);
        } else {
          context.commit("setMsg", err);
        }
      } catch (e) {
        context.commit("setMsg", "an error occured");
      }
    },
    addToCart({ commit }, product) {
      commit('addToCart', product)
    }
  },
  modules: {
  }
})
