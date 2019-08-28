<template>
  <div id="service-modal">
    <div class="card-service">
      <button title="close" class="close" @click="$emit('dismiss')">Close</button>
      <div class="container">
        <div class="left" :style="{'background-image':`url(${selectedService.img})`}"></div>
        <div class="right">
          <h4>{{selectedService.title}}</h4>
          <ul>
            <li
              v-for="(item,index) in selectedService.content"
              :key="index"
              :title="` Click to enquire about ${item}`"
              @click=" subType=item; enquiryModal = true"
            >{{item}}</li>
          </ul>
          <button class="btn" @click="enquiryModal = true">Enquire</button>
        </div>
      </div>
    </div>
    <transition name="fade">
      <EnquiryModal
        v-if="enquiryModal"
        @dismiss="enquiryModal=false; $emit('dismiss')"
        v-bind:selectedType="selectedService.title"
        v-bind:subType="subType"
      />
    </transition>
  </div>
</template>

<script>
import EnquiryModal from '@/components/EnquiryModal'
export default {
  props: ['selectedService'],
  components: {
    EnquiryModal
  },
  data() {
    return {
      enquiryModal: false,
      cardActive: false,
      subType:null
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scopped>
// .scale-enter-active,
// .scale-leave-active {
//   transition: all 0.2s ease;
// }
// .scale-enter, .scale-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
//   transform: scale(0) !important;
//   border-radius: 50%;
// }
#service-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.836);

  .card-service {
    position: absolute;
    width: 55%;
    @include for-desktop-up{
      height: 600px;
    }
    @include for-tablet-portrait-up {
      height: 500px;
    }
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @include for-tablet-only{
      height: auto;
    }

    @include for-phone-only {
      width: 300px;
      top: 50%;
    }

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

      @include for-tablet-only {
        flex-direction: column;
      }

      @include for-phone-only {
        flex-direction: column;
      }
    }

    .left {
      width: 70%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;

      @include for-tablet-only {
        width: 100%;
        width: 100%;
        height: 250px;
        background-position: center;
        background-size: cover;
      }

      @include for-phone-only {
        width: 100%;
        height: 200px;
        background-position: center;
        background-size: contain;
      }
    }
    .right {
      width: 30%;
      color: black;
      background: $primary;
      position: relative;

      @include for-tablet-only {
        width: 100%;
      }

      @include for-phone-only {
        width: 100%;
      }

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

        @include for-phone-only {
          font-size: 14px;
          margin-left: 16px;
          margin-top: 16px;
        }

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

        @include for-phone-only {
          padding-left: 20px;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          position: relative;
          margin-left: 8px;
        }

        @include for-tablet-only {
          padding-left: 20px;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          position: relative;
          margin-left: 8px;
          padding-left: 40px;
        }
      }

      li {
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 0.02em;
        color: #161616;
        padding-right: 4px;
        @include for-phone-only {
          font-size: 12px;
          margin-right: 24px;
        }

        @include for-tablet-only{
          font-size: 12px;
          margin-right: 24px;
        }
      }

      li:hover{
        color: #fff;
        cursor: pointer;
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
        left: 24px;
        cursor: pointer;

        @include for-phone-only {
          font-size: 12px;
          position: relative;
          bottom: auto;
          left: 16px;
          margin: 16px 0;
        }

        @include for-tablet-only{
          font-size: 12px;
          position: relative;
          bottom: auto;
          left: 16px;
          margin: 16px 0;
        }
      }
    }
  }
}
</style>