<template>
  <div id="footer">
    <div class="social">
      <a href="http://www.linkedin.com/company/dressland-uniforms/about/?viewAsMember=true" target="_blank">
        <i class="fa fa-linkedin" aria-hidden="true"></i>
      </a>
      <a href="https://www.facebook.com/Dressland-Uniforms-889982214668663/" target="_blank">
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </a>
      <!-- <a target="_blank" href="#">
        <i class="fa fa-twitter" aria-hidden="true"></i>
      </a> -->
      <a target="_blank" href="https://www.instagram.com/dressland.uniforms/">
        <i class="fa fa-instagram" aria-hidden="true"></i>
      </a>
    </div>
    <p class="copyright">&copy; Copyright {{new Date().getFullYear()}} | Dressland | All Rights Reserved</p>
    <p class="formec">Designed with <i class="fa fa-heart" aria-hidden="true"></i> by <a title="We help people shine on internet" target="_blank" href="https://www.formecmedia.com">Formec Media</a></p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scopped>
#footer {
  width: 100%;
  position: relative;
  padding: 8px;

  .social {
    display: block;
    margin: 0 auto;
    text-align: center;
    padding: 0;

    a {
      transition: 0.2s ease all;
    }

    i {
      font-size: 18px;
      margin: 0 8px;
    }
  }

  a:hover {
    i {
      color: $primary;
    }
  }

  .copyright {
    text-align: center;
    font-size: 12px;
    color: #727272;
    margin: 8px 0;
  }

  .formec{
    text-align: center;
    font-size: 12px;
    color: #727272;
    i{
      color: $primary;
    }

    a{
      color: $primary;
    }

  }
}
</style>