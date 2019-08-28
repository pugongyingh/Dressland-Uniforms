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
            'We ordered to stitch 50+ blazers for our chapter. He was fast and kind enough to finish job within 7 days. His team was kind enough to come to our place to take measurement. All done in super fast speed. Last but not least, the fabric we got at the cost was best. Anyone looking for uniform for their entity or company, dressland is first place.',
          name: 'CA Chetan Oswal'
        },
        {
          text:
            'Cosmos Safesystems was in urgent need of a dependable source of Blazer for BNI. And our dear friend Mr. Piyush satra representing Dressland uniforms, helped us by providing timely and quality services in such emergency and hence, we could continue our jobs uninterrupted and efficiently. We received effortless services by highly professional and courteous staff with a confirmed quality of products and material, user and delivered under the subtle guidance of Piyush. It was a treat and honor to be served at Dressland uniforms. Surely, you have earned our undying gratitude for your impeccable services.',
          name: 'Rutuparn Kulkarni'
        },
      
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
  text-align: center;
  width: 100%;
  position: relative;

  @include for-tablet-portrait-up{
    padding: 32px 100px;
  }

  @include for-desktop-small-only{
    padding: 32px 50px;
  }

  @include for-tablet-only{
    padding: 32px;
  }

  img {
    margin-bottom: 16px;
    @include for-phone-only{
      margin-top: -12px;
    }
  }

  h4 {
    text-align: left;
    font-weight: 800;
    font-size: 24px;
    letter-spacing: 0.125em;
    color: #feca0a;
    margin-bottom: 32px;

    @include for-phone-only{
      text-align: center;
      margin: 0 64px;
    }
    @include for-desktop-small-only{
      margin-bottom: 16px;
    }
  }

  .content {
    border: 0.5px solid rgba(255, 255, 255, 0.452);
    border-radius: 27px;
    padding: 64px;
    position: relative;
    width: 100%;
    min-height: 360px;

    @include for-phone-only{
      min-height: 350px;
      margin-top: 48px;
    }

    .slide{
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%, -50%);

      @include for-phone-only{
        width: 100%;
      }
      
    }

    .center{
      @include for-phone-only{
        width: 100%;
        height: 100%;
      }
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

      @include for-phone-only{
        font-size: 12px;
        min-height: 130px;
        width: 90%;
        text-align: justify;
        font-weight: 100;
      }
    }

    h5 {
      font-weight: 500;
      font-size: 14px;
      text-align: center;
      letter-spacing: 0.02em;
      color: #feca0a;
      font-style: italic;

      @include for-tablet-portrait-up{
        margin-top: 8px;
      }

      @include for-phone-only{
        margin-top: 8px;
        margin-bottom: 16px;
      }
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

    @include for-phone-only{
      width: 48px;
      height: 48px;
      top: 100%;
    }

    @include for-tablet-only{
      left: 16px;
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
     @include for-phone-only{
      width: 48px;
      height: 48px;
      top: 100%;
    }

    @include for-tablet-only{
      right: 16px;
    }
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
    
    @include for-phone-only{
      background: #000;
    }
    img{
      width: 20px;
    }
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

      @include for-phone-only{
        width: 32px;
        height: 32px;
      }
      
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