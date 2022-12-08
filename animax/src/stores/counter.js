import { defineStore } from "pinia";
import axios from "axios";
import { nextTick } from "vue";
const baseUrl = "https://semoga-lulus-ya-allah-production.up.railway.appp";
export const useCounterStore = defineStore("counter", {
  state: () => ({
    isLogin: false,
    products: [],
    carts: [],
    details: [],
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
    async loginGoogle(token) {
      try {
        const { data } = await axios.post(
          `${baseUrl}/users/googleLogin`,
          {},
          {
            headers: {
              google_token: token,
            },
          }
        );
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("id", data.id);
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
      this.router.push("/");
      Swal.fire("Sign out success", "See you later elevator", "success");
    },
    async getData() {
      try {
        let { data } = await axios({
          url: `${baseUrl}/products`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.products = data.slice(0, 40);
      } catch (error) {
        nextTick(error);
      }
    },
    async getDetail() {
      try {
        let { data } = await axios({
          url: `${baseUrl}/products/details`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.details = data;
        console.log(data);
      } catch (error) {
        Swal.fire("Error !", error.response.data.message, "error");
      }
    },
    async addCart(id) {
      try {
        const { data } = await axios.post(
          `${baseUrl}/products/carts/${id}`,
          {},
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        Swal.fire(
          "Add to cart success",
          "You can check your cart now or later",
          "success"
        );
      } catch (error) {
        Swal.fire("Error !", error.response.data.message, "error");
      }
    },
    async fetchCart() {
      try {
        const { data } = await axios.get(`${baseUrl}/products/carts`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.carts = data;
      } catch (error) {
        Swal.fire("Error !", error.response.data.message, "error");
      }
    },
    async handleAddCart(id) {
      if (localStorage.access_token) {
        this.addCart(id);
      } else {
        this.router.push("/login");
      }
    },
    async deleteCart(id) {
      try {
        const { data } = await axios.delete(
          `${baseUrl}/products/carts/delete/${id}`,
          {},
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        Swal.fire("Delete product success", "success");
      } catch (error) {
        console.log(error);
      }
    },
    async handleDeleteCart(id) {
      if (localStorage.access_token) {
        this.deleteCart(id);
      } else {
        this.router.push("/login");
      }
    },
    async payment() {
      try {
        const { data } = await axios({
          url: `${baseUrl}/products/carts/payment`,
          method: "POST",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        window.snap.pay(data.token, {
          onSuccess: function (result) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Payment Success",
              showConfirmButton: false,
              timer: 1500,
            });
          },
        });
        this.totalPrice = 0;
        this.router.push("/anime");
      } catch (error) {
        console.log(error);
      }
    },
  },
});
