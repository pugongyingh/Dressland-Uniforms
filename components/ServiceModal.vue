<template>
  <div id="service-modal">
    <div class="card">
      <button title="close" class="close" @click="$emit('dismiss')">Close</button>
      <div class="container">
        <div class="left" :style="{'background-image':`url(${selectedService.img})`}"></div>
        <div class="right">
          <h4>{{selectedService.title}}</h4>
          <ul>
            <li v-for="item in selectedService.content" :key="item">{{item}}</li>
          </ul>
          <button class="btn" @click="enquiryModal = true">Enquire</button>
        </div>
      </div>
    </div>
    <transition name="fade" >
      <EnquiryModal v-if="enquiryModal" @dismiss="enquiryModal=false; $emit('dismiss')" v-bind:selectedType="selectedService.title"/>
    </transition>
  </div>
</template>

<script>
import EnquiryModal from '@/components/EnquiryModal'
export default {
  props: ['selectedService'],
  components:{
    EnquiryModal
  },
  data(){
    return{
      enquiryModal:false
    }
  }
}
</script>

<style lang="scss" scopped>
#service-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.836);

  .card {
    position: absolute;
    width: 55%;
    height: 450px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .close {
      position: absolute;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.568);
      right: 0;
      top: -24px;
      background: transparent;
      border: none;
      font-size: 12px;
      letter-spacing: 0.1em;
      cursor: pointer;
      transition: 0.3s ease all;
    }

    .close:hover {
      color: #fff;
    }

    .container {
      width: 100%;
      background: #fff;
      height: 100%;
      position: relative;
      border-radius: 15px;
      display: flex;
      overflow: hidden;
    }

    .left {
      width: 70%;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .right {
      width: 30%;
      color: black;
      background: $primary;
      position: relative;

      h4 {
        font-weight: 800;
        font-size: 18px;
        letter-spacing: 0.125em;
        color: #2f2f2f;
        text-transform: uppercase;
        margin-left: 24px;
        margin-top: 32px;
        margin-bottom: 24px;
        position: relative;

        &::after {
          content: '';
          width: 20px;
          height: 2px;
          background: #000;
          position: absolute;
          left: 0;
          bottom: -8px;
        }
      }

      ul {
        padding-left: 40px;
      }

      li {
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 0.02em;
        color: #161616;
      }

      .btn {
        font-weight: 800;
        font-size: 16px;
        letter-spacing: 0.125em;
        color: #000000;
        background: transparent;
        border: 1px solid black;
        border-radius: 49px;
        padding: 8px 16px;
        text-transform: uppercase;
        position: absolute;
        bottom: 32px;
        left:24px;
        cursor: pointer;
      }
    }
  }
}
</style>