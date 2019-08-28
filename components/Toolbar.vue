<template>
  <div id="toolbar">
    <div class="logo">
      <nuxt-link to="/">
        <img src="/icons/logo.png" />
      </nuxt-link>
    </div>
    <div class="phone-only ham" @click="menu=true">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </div>
    <div class="desktop-only">
      <scrollactive class="mid-menu" :offset="100" :duration="800" bezier-easing-value=".5,0,.35,1">
        <nuxt-link to="/">Home</nuxt-link>
        <a @click="checkRoute" href="#section-products" class="scrollactive-item">Our Products</a>
        <a @click="checkRoute" href="#section-fabrics" class="scrollactive-item">Fabrics USED</a>
        <a @click="checkRoute" href="#section-clients" class="scrollactive-item">Our Clients</a>
        <a @click="checkRoute" href="#section-contact" class="scrollactive-item">Contact Us</a>
      </scrollactive>
    </div>
    <transition name="slidedown">
      <div class="phone-only p-menu" v-if="menu">
      <button class="close" @click="menu=false">
        <img src="/icons/close.svg" />
      </button>
      <div class="center">
        <scrollactive class="menu" :offset="100" :duration="800" bezier-easing-value=".5,0,.35,1">
          <a @click="checkRoute" href="/"> <nuxt-link to="/">Home</nuxt-link></a>
          <a @click="checkRoute" href="#section-products" class="scrollactive-item">Our Products</a>
          <a @click="checkRoute" href="#section-fabrics" class="scrollactive-item">Fabrics USED</a>
          <a @click="checkRoute" href="#section-clients" class="scrollactive-item">Our Clients</a>
          <a @click="checkRoute" href="#section-contact" class="scrollactive-item">Contact Us</a>
          <a href="/about" @click="menu=false"><nuxt-link  to="/about">ABOUT</nuxt-link></a>
        </scrollactive>
      </div>
    </div>
    </transition>
    <div class="last-link desktop-only">
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
      ],
      menu:false
    }
  },
  methods: {
    checkRoute: function() {
      this.menu = false;
      const name = this.$route.name
      if (name == 'about') {
        this.$router.push('/');
      }
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
  overflow: hidden;

  @include for-phone-only {
    height: 60px;
  }

  @include for-tablet-only{
    height: 55px;
  }

  .nuxt-link-exact-active {
    font-weight: bold;
  }

  .logo {
    height: 66px;

    @include for-phone-only {
      height: 60px;
    }

    @include for-tablet-only{
      height: 55px;
    }

  

    img {
      height: 101%;
      object-fit: contain;
      @include for-tablet-only{
        object-fit: cover;
      }
    }
  }

  .ham{
    color: black;
    font-size: 24px;
    position: absolute;
    right:16px;
    top:50%;
    transform: translateY(-50%);
    
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
      
      text-transform: uppercase;
      position: relative;

      @include for-tablet-portrait-up{
        margin-right: 41px;
      }

      @include for-tablet-only{
        margin-right: 12px;
        font-size: 11px;
      }

      &::after {
        content: '';
        position: absolute;
        height: 1px;
        background: #000;
        bottom: -4px;
        left: 50%;
        transform: translateX(-50%);
        transition: 0.3s ease all;
        width: 0;
      }
    }
    
  }

  .p-menu {
    position: fixed;
    top: 0;
    left: 0;
    background: $primary;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    a{
      position: relative;
    }

    .close {
      background: none;
      border: none;
      padding: 8px;
      box-sizing: border-box;
      position: absolute;
      top: 16px;
      right: 16px;
      img {
        width: 24px;
        height: 24px;
      }
    }

    .center{
      position: absolute;
      top:44%;
      left: 50%;
      transform: translate(-50%, -50%);

      .is-active{
        &::after{
          content: '';
          width: 100px;
          height: 1px;
          background: #000;
          position: absolute;
          left: 0;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);

        }
      }
    }

    .menu {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: center;
      a {
        display: block;
        font-size: 20px;
        text-transform: uppercase;
        margin: 8px 0;
      }
    }
  }

  .last-link {
    position: absolute;
    right: 32px;
  }
}
.is-active {
  &::after {
    width: 50% !important;
  }
}

.slidedown-enter-active,
.slidedown-leave-active {
  transition: all 0.2s ease;
}
.slidedown-enter, .slidedown-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>