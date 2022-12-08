<script>
export default {
  name: "FormEditView",
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
      <form style="color: white">
        <button
          type="submit"
          style="margin-left: 110px; margin-bottom: -50px; margin-top: 10px"
        >
          Upload profile picture
        </button>
        <div class="input_wrap">
          <h5>Username</h5>
          <input type="text" placeholder="Enter email here.." />
        </div>
        <div class="input_wrap">
          <h5>Phone Number</h5>
          <input type="text" placeholder="Enter password here.." />
        </div>
        <div class="input_wrap">
          <h5>Address</h5>
          <input type="text" placeholder="Enter password here.." />
        </div>
      </form>
      <RouterLink to="/editProfile">
        <button type="submit" style="margin-bottom: 10px; margin-left: 160px">
          Save
        </button>
      </RouterLink>
    </div>
  </section>
</template>
