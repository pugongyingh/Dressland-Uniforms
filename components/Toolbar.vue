<template>
  <div id="toolbar">
    <div class="logo">
      <nuxt-link to="/">
        <img src="/icons/logo.png" />
      </nuxt-link>
    </div>
    <scrollactive class="mid-menu" :offset="100" :duration="800" bezier-easing-value=".5,0,.35,1">
      <nuxt-link to="/" >Home</nuxt-link>
      <a href="#section-products" class="scrollactive-item">Our Products</a>
      <a href="#section-fabrics" class="scrollactive-item">Fabrics USED</a>
      <a href="#section-clients" class="scrollactive-item">Our Clients</a>
      <a href="#section-contact" class="scrollactive-item">Contact Us</a>
    </scrollactive>

    <div class="last-link">
      <nuxt-link to="/about">ABOUT</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  data() {
    return {
      menuItems: [
        {
          title: 'HOME',
          route: 'section-home'
        },
        {
          title: 'OUR PRODUCTS',
          route: 'section-products'
        },
        {
          title: 'FABRICS USED',
          route: 'section-fabrics'
        },
        {
          title: 'OUR CLIENTS',
          route: 'section-clients'
        },
        {
          title: 'CONTACT US',
          route: 'section-contact'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scopped>
#toolbar {
  width: 100%;
  position: fixed;
  top: 0;
  background: $primary;
  display: flex;
  align-items: center;
  height: 67px;
  z-index: 1000;

  .nuxt-link-exact-active {
    font-weight: bold;
  }

  .logo {
    height: 66px;

    img {
      height: 101%;
      object-fit: contain;
    }
  }
  a {
    font-size: 12px;
    color: #272727;
  }

  .mid-menu {
    display: flex;
    list-style: none;
    align-items: center;

    a {
      margin-right: 41px;
      text-transform: uppercase;
    }
  }

  .last-link {
    position: absolute;
    right: 32px;
  }
}
.is-active {
  font-weight: bold;
}
</style>