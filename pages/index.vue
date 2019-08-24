<template>
  <main id="home" >
    <transition name="fade" >
      <EnquiryModal v-if="enquiryModal" @dismiss="enquiryModal=false"/>
    </transition>
    <section id="section-home">
      <Carousel />
    </section>
    <div class="short">
      <p>We specialize in providing 100% cotton fabric,an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.We specialize in providing 100% cotton fabric,an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.We specialize in providing 100% cotton fabric,an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
    </div>
    <div id="section-products">
      <Services />
    </div>
    <section id="section-fabrics">
      <h4>FABRICS WE USE</h4>
      <hr />
      <ul>
        <li
          v-for="(fabric,index) in fabrics"
          :key="index"
          :class="[{'primary':index%2!=0}]"
        >{{fabric}}</li>
      </ul>
    </section>
    <Testimonials />
    <Clients />
    <section id="section-contact">
      <div class="flex">
        <div class="card">
          <a title="Open in Google Maps" target="_blank" href="https://goo.gl/maps/WFp77GCZ1ShiB3CWA">  <i class="fa fa-map-marker" aria-hidden="true"></i></a>
          <p>
            3247, Mahadwar Rd, Shivaji Peth
            A Ward, C Ward, Kolhapur, Maharashtra 416012
          </p>
        </div>
        <div class="card">
          <i class="fa fa-phone" aria-hidden="true"></i>
          <a title="Call" href="tel:+917066051155"><p class="phone">+91 706 605 1155</p></a>
         <a title="Send Email" href="mailto:dresslanduniforms@gmail.com"> <p class="email">dresslanduniforms@gmail.com</p></a>
          <p class="url">www.dresslanduniforms.in</p>
        </div>
      </div>
    </section>
    <button title="Let us help you!" class="enquire" @click="enquiryModal=true">ENQUIRE</button>    
  </main>
</template>

<script>
import Carousel from '@/components/Carousel'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Clients from '@/components/Clients'

import EnquiryModal from '@/components/EnquiryModal'
export default {
  components: {
    Carousel,
    Services,
    Testimonials,
    Clients,
    EnquiryModal
  },
  data() {
    return {
      fabrics: [
        '100% COTTON',
        'POLYSTER COTTON',
        'POLYSTER VISCOS',
        'LINENS',
        'TEREWOOLS',
        'POLYSTER'
      ],
      enquiryModal:false
    }
  }
}
</script>

<style lang="scss" scopped>
#home {
  position: relative;
  width: 100%;

  hr {
    border: 0.5px solid rgba(255, 255, 255, 0.473);
  }

  .short {
    p {
      font-weight: 500;
      font-size: 14px;
      max-width: 668px;
      text-align: center;
      margin: 32px auto;
      @include for-phone-only{
        width: 100%;
        text-align: justify;
        padding: 0 16px;
      }
    } 
  }
  #section-fabrics {

    @include for-tablet-portrait-up{
      padding: 32px 100px;
      margin-bottom: 64px;
    }

    @include for-phone-only{
      margin-top: 32px;
      margin-bottom: 32px;
    }

    hr{
      width: 30%;
      margin: 0 auto;
    }
    
    h4 {
      font-weight: 800;
      font-size: 24px;
      color: $primary;
      margin-bottom: 8px;
      letter-spacing: 0.125em;

      @include for-phone-only{
        text-align: center;
      }
    }

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      margin-top: 39px;
      @include for-phone-only{
        width: 100%;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        text-align: left;
        margin-top: 16px;
        padding-left: 0;
        
      }

      li {
        margin: 0 12px;
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 0.16em;

        @include for-phone-only{
          font-size: 12px;
          margin: 4px 8px;
        }
      }
    }
  }

  #section-contact {
    position: relative;
    width: 100%;
    margin-bottom: 100px;

    @include for-phone-only{
      margin-top: 48px;
      margin-bottom: 48px;
    }

    .flex {
      display: flex;
      align-items: center;
      justify-content: center;

      @include for-phone-only{
        flex-wrap: wrap;
      }

      .card {
        max-width: 262px;
        text-align: center;
        margin: 0 32px;

        @include for-phone-only{
          width: 100%;
          padding: 12px;
        }

        i {
          color: $primary;
          font-size: 30px;
        }

        p {
          font-size: 14px;
          text-align: center;
          letter-spacing: 0.05em;
          margin: 4px 0;
        }

        .phone {
          color: #feca0a;
        }
      }
    }
  }

  .enquire {
    display: block;
    font-weight: 800;
    font-size: 24px;
    letter-spacing: 0.125em;
    color: #000000;
    background: $primary;
    margin:64px auto;
    border: none;
    padding: 8px 14px;
    border-radius: 29px;
    width: 286px;
    cursor: pointer;
    margin-bottom: 32px;

    @include for-phone-only{
      margin: 0 auto;
      margin-bottom: 16px;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(0);
  border-radius: 50%;
}
</style>