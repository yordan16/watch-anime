<script>
export default {
  name: "ProfileView",
};
</script>

<template>
  <section class="container">
    <div class="head">
      <img src="../assets/img/animax-logo.png" alt="" />
    </div>
  </section>
  <section class="banner">
    <img src="../assets/img/background.webp" class="fit" alt="" />

    <div class="login_body">
      <div class="login_box">
        <h2>My profile</h2>
      </div>
      <div
        class="card"
        style="width: 18rem; margin-top: 20px; margin-left: 70px"
      >
        <img
          src="../assets/img/background.webp"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body" style="color: white">
          <h5 class="card-title">Username</h5>
          <center>
            <p class="card-text" style="margin-bottom: 10px; margin-top: 10px">
              phone number
            </p>
            <p class="card-text" style="margin-bottom: 10px">address</p>
          </center>
          <RouterLink to="/editProfile">
            <button
              type="submit"
              style="margin-left: 75px; margin-bottom: 10px"
            >
              Edit profile
            </button>
          </RouterLink>
          <RouterLink to="/anime">
            <button type="submit" style="margin-left: 87px">Cancel</button>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
