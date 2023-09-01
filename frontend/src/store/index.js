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
    token: null
  },
  getters: {
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
    }
  },
  modules: {
  }
})
