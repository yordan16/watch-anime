import { defineStore } from "pinia";
import axios from "axios";
const baseUrl = "http://localhost:3000";
export const useCounterStore = defineStore("counter", {
  state: () => ({
    isLogin: false,
    products: [],
  }),
  actions: {
    async register(dataRegis) {
      try {
        const { data } = await axios.post(
          `${baseUrl}/users/register`,
          dataRegis
        );
        this.router.push("/login");
        Swal.fire("Sign up success", "Please Sign in first", "success");
      } catch (error) {
        Swal.fire("Error !", error.response.data.message, "error");
      }
    },
    async login(dataLogin) {
      try {
        const { data } = await axios.post(`${baseUrl}/users/login`, dataLogin);
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("email", data.email);
        this.isLogin = true;
        this.router.push("/anime");
        Swal.fire("Sign in success", "Welcome to Animax", "success");
      } catch (error) {
        Swal.fire("Error !", error.response.data.message, "error");
      }
    },
    logout() {
      localStorage.clear();
      this.isLogin = false;
      Swal.fire("Sign out success", "See you later elevator", "success");
    },
    async getData() {
      try {
        const { data } = await axios({
          url: `${baseUrl}/products`,
          method: "GET",
        });
        this.products = data;
        console.log("🚀 ~ file: counter.js:46 ~ getData ~ data", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
