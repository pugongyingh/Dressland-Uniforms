<template>
  <div id="services">
    <h4 class="primary title">We Provide</h4>
    <hr />
    <div class="cards">
      <div
        class="card"
        v-for="(service,index) in services"
        :key="service.title+index"
        @click="clickedServiceIndex=index; modalState=true"
      >
        <div class="data">
          <p>{{service.title}}</p>
        </div>
        <div class="content" :style="{'background-image':`url(${service.img})`}">
          <div class="overlay">
            <p>
              <span
                v-for="(item,i) in service.content"
                :key="item"
                v-if="i<5"
              >{{item}}{{i != service.content.length-1 ? `, `:'.'}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <transition name="scale">
      <ServiceModal
        v-if="modalState"
        v-bind:selectedService="services[clickedServiceIndex]"
        @dismiss="modalState=false"
      />
    </transition>
  </div>
</template>

<script>
import ServiceModal from '@/components/ServiceModal'
export default {
  name: 'ServiceComponent',
  components: {
    ServiceModal
  },
  data() {
    return {
      services: [
        {
          title: 'Corporate Uniforms (Men & Women)',
          img: '/services/corporate.jpeg',
          content: [
            'Shirts', 'Trousers', 'Blazers', 'Waist Coats', 'Ties', 'Socks',
            'Sarees',
            'Kurtis',
            'Shirts',
            'Pants',
            'Blazers',
            'Scarfs'
          ]
        },
        {
          title: 'Workshop Uniforms',
          img: '/services/workshop.jpeg',
          content: [
            'Sweaters',
            'Dungarees',
            'Body Suits',
            'Shirts',
            'Trousers'
          ]
        },
        {
          title: 'Event Uniforms',
          img: '/services/event.jpg',
          content: [
            'T-Shirts',
            'Jerseys',
            'Cycling Speed Suits',
            'Shirts',
            'Trousers'
          ]
        },
        {
          title: 'School Uniforms',
          img: '/services/school.jpeg',
          content: [
            'Blazers', 'Shirts', 'Trousers', 'Half Pant', 'Sweaters', 'Dungarees', 'T-Shirts','Track Pants', 'Pinafores','Tops',
            'Skirts','Frocks','Ties','Socks','Belts','Caps','Bags'
          ]
        },
        {
          title: 'Hospitality Uniforms',
          img: '/services/hospitality.jpeg',
          content: [
            'Chef Uniforms','Caps','Waiter Uniforms','Manager Uniforms',
            'Housekeeping Uniforms','Blazers','Waistcoat','Security Uniforms'
          ]
        },
        {
          title: 'Hospital Uniforms',
          img: '/services/hospital.jpg',
          content: [
            'Doctor Uniforms','Patient Uniforms','Staff Uniforms',
            'Bed Linens'
          ]
        },
        {
          title: 'Accessories',
          img: '/services/accessories.jpg',
          content:[
            'Ties','Belts','Socks', 'Caps'
          ]
        },

        {
          title: 'Custom',
          img: '/services/custom.jpg',
          content:[
            'Custom Outfits As Per Requirements' ,
          ]
        }
      ],
      modalState: false,
      clickedServiceIndex: null
    }
  }
}
</script>

<style lang="scss" scopped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s ease;
}
.scale-enter, .scale-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(0) !important;
  border-radius: 50%;
}

#services {
  width: 100%;
  
  @include for-tablet-portrait-up{
      padding: 32px 100px;
      min-height: 90vh;
  }

  @include for-phone-only{
    padding: 48px 0;
  }
  .title {
    font-weight: 800;
    font-size: 24px;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.125em;

    @include for-phone-only{
      text-align: center;
    }
  }

  hr {
    border: 0.5px solid rgba(255, 255, 255, 0.295);
    @include for-phone-only{
      max-width: 30%;
      margin: 0 auto;
    }
  }

  .cards {
    max-width: 800px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin: 0 auto;
    @include for-tablet-portrait-up{
      margin-top: 100px;
    }
    @include for-phone-only{
      margin-top: 32px;
      padding-left: 16px;
    }

    @include for-tablet-only{
      margin-top: 32px;
    }

    .card {
      width: 129px;
      height: 158px;
      position: relative;
      

      @include for-desktop-up{
        margin-right: 55px;
      }
      background-size: cover;
      background-position: center;
      margin-bottom: 25px;
      cursor: pointer;
      transition: 0.2s ease all;

      @include for-tablet-portrait-up{
        margin: 12px; 
      }
      @include for-phone-only{
        width: 70px;
        height: 100px;
        margin-right: 16px;
        margin-bottom: 16px;
        border-radius: 9px;
      }
    }
    .data {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      border-radius: 17px;
      left: 0;
      overflow: hidden;
      background: linear-gradient(180deg, #feca0a 0%, #6c5700 100%);
      @include for-phone-only{
        border-radius: 9px;
      }

      p {
        font-weight: 800;
        font-size: 14px;
        color: black;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        text-transform: uppercase;

        @include for-phone-only{
          font-size: 10px;
        }
      }
    }

    .content {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      border-radius: 17px;
      overflow: hidden;
      top: 0;
      opacity: 0;
      transition: 0.2s ease all;
      background-position: center;
      background-size: cover;

      .overlay {
        position: absolute;
        background: $primary;
        font-weight: 500;
        bottom: 0;
        left: 0;
        font-size: 12px;
        color: black;
        padding: 8px;
      }
    }

    .card:hover {
      transform: scale(1.1);
      .content {
        opacity: 1;
      }

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        transform: scale(1.09);
        border-radius: 17px;
        border: 0.5px solid rgba(255, 255, 255, 0.466);
        top: 0;
        left: 0;
      }
    }
  }
}
</style>