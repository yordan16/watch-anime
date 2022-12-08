<script>
export default {
  name: "HomeView",
};
</script>

<template>
  <section class="container">
    <div class="head">
      <img src="../assets/img/animax-logo.png" alt="" />
      <RouterLink to="/login" href="">Sign Up</RouterLink>
    </div>
  </section>
  <section class="banner">
    <img src="../assets/img/background.webp" class="fit" alt="" />
    <div class="box">
      <div class="heading">
        <h2>Unlimited anime, manga, and more.</h2>
        <h5>Watch anywhere, read anywhere.</h5>
        <p>
          Ready to start? Click the Sign Up button to create your membership or
          click <RouterLink to="/register" href="">here</RouterLink> to sign in.
        </p>
      </div>
    </div>
  </section>
</template>
