<template>
  <section id="testi">
    <h4>WHAT OUR CLIENTS SAY</h4>
    <div class="content">
      <div class="center">
       <transition-group name="fade-in">
         <div class="slide" v-for="(t,i) in testimonials" :key="t.name" v-if="i==current">
            <img src="/icons/ic_quote.svg" />
        <p>{{testimonials[current].text}}</p>
        <h5>- {{testimonials[current].name}}</h5>
         </div>
       </transition-group>
      </div>
      <div class="nav-left nav" @click="slideLeft">
         <img src="/icons/arrow_left.svg" />
        <div class="container">
        </div>
      </div>
      <div class="nav-right nav" @click="slideRight">
        <img src="/icons/arrow_right.svg" />
        <div class="container">
          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialComponent',
  data() {
    return {
      testimonials: [
        {
          text:
            'We specialize in providing 100% cotton fabric,an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survivd not only five centuries.We specialize in',
          name: 'Rahul Patil'
        },
        {
          text:
            'specimen book. It has survivd not only five centuries.We took a galley of type and scrambled it to make a type specimen book. It has survivd not only five centuries.We specialize in',
          name: 'Mehul Patil'
        },
        {
          text:
            'We specialize100% cotton fabric,an unknown printer took a galley of type and scrambled it in providing  to make a type specimen book. It has survivd not only five centuries.We specialize in',
          name: 'Kanye Patil'
        },
        {
          text:
            'We specialize in providing 100% cotton fabric,an unknown printer took a gallok. It has survivd not only five centuries.We speciaey of type and scrambled it to make a type specimen bolize in',
          name: 'Kendrik Patil'
        }
      ],
      current: 0
    }
  },
  methods:{
    slideLeft:function(){
      this.current == 0 ? this.current = this.testimonials.length-1 : this.current--;
    },
    slideRight:function(){
      this.current == this.testimonials.length-1 ? this.current = 0 : this.current++;
    },
  }
}
</script>

<style lang="scss" scopped>
#testi {
  padding: 32px 100px;
  text-align: center;
  width: 100%;
  position: relative;

  img {
    margin-bottom: 16px;
  }

  h4 {
    text-align: left;
    font-weight: 800;
    font-size: 24px;
    letter-spacing: 0.125em;
    color: #feca0a;
    margin-bottom: 32px;
  }

  .content {
    border: 0.5px solid rgba(255, 255, 255, 0.452);
    border-radius: 27px;
    padding: 64px;
    position: relative;
    width: 100%;
    min-height: 350px;

    .slide{
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%, -50%);
      
    }

    p {
      font-weight: 500;
      max-width: 750px;
      font-size: 14px;
      text-align: center;
      letter-spacing: 0.02em;
      margin: 0 auto;
      color: #ffffff;
      min-height: 80px;
    }

    h5 {
      font-weight: 500;
      font-size: 14px;
      text-align: center;
      letter-spacing: 0.02em;
      color: #feca0a;
      font-style: italic;
    }
  }

  .nav-left {
    position: absolute;
    left: 76px;
    top: 50%;
    width: 93px;
    height: 93px;
    border-radius: 50%;
    border: 0.5px solid rgba(255, 255, 255, 0.253);
    transform: translateY(-50%);
    cursor: pointer;

    img {
      margin: 0;
    }
  }

  .nav-right {
    position: absolute;
    right: 76px;
    top: 50%;
    width: 93px;
    height: 93px;
    border-radius: 50%;
    border: 0.5px solid rgba(255, 255, 255, 0.253);
    transform: translateY(-50%);
    cursor: pointer;

    img {
      margin: 0;
    }
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
    .container {
      position: absolute;
      width: 85%;
      height: 85%;
      border-radius: 50%;
      background: #313131;
      border: 0.5px solid #dadada85;
      transform: scale(0);
      opacity: 0;
      transition: 0.2s ease all;
    }
  }

  .nav:hover {
    .container{
      transform: scale(1);
      opacity: 1;
      z-index: -1;
    }
  }
}
.fade-in-enter-active,
.fade-in-leave-active {
  transition: all 0.3s ease-in-out;
}
.fade-in-enter, .fade-in-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>