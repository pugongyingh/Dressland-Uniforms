<template>
  <section id="section-clients" v-inview:enter="playAnim">
    <div class="container">
      <div class="left">
        <div class="overlay">
          <img src="/icons/client_bottom.svg" class="bottom" />
        </div>
        <div class="content">
          <h2>OUR CLIENTS</h2>
          <ul>
            <li v-for="client in clients" :key="client">{{client}}</li>
          </ul>
        </div>
      </div>
      <div class="right">
        <!-- <img src="/icons/el_carousel.svg" /> -->
        <svg
          width="379"
          height="280"
          viewBox="0 0 379 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="img"
        >
          <path
            d="M0 231.136H279.034L263.586 279H170.414L213.379 122.837H111.034L123.103 79.807H356.276L378 1H213.379L162.207 170.701H0"
            stroke="url(#paint0_linear)"
            stroke-width="0.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="189"
              y1="1"
              x2="189"
              y2="279"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#999999" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
import inView from 'in-view'
export default {
  name: 'ClientComponent',
  data() {
    return {
      clients: [
        'Unique Automobiles, Kolhapur',
        'Sambaragi Traders',
        'BNI Kolhapur',
        'Hotel Ramee Panchshill',
        'Kirnik Rain Water Harverster',
        'Optical Hut',
        'Shree Mahalaxmi Associates',
        'Maknet Industries',
        'Dr. D. Y. Patil Shantiniketan School, Kolhapur'
      ],
      animted: false
    }
  },
  mounted() {},
  methods: {
    playAnim: function() {
      if (this.animted) {
        return
      }
      this.animted = true
      anime({
        targets: '.img path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 3000,
        delay: function(el, i) {
          return i * 250
        },
        direction: 'forwards',
        loop: false
      })
    }
  }
}
</script>

<style lang="scss" scopped>
#section-clients {
  position: relative;
  width: 100%;
  overflow: hidden;
  @include for-tablet-portrait-up {
    margin-top: 122px;
    margin-bottom: 96px;
  }

  @include for-phone-only {
    margin-top: 48px;
  }

  .container {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .left {
      width: 55%;
      height: 100%;
      position: relative;

      @include for-phone-only {
        width: 105%;
        background: #fff;
        padding: 24px 0;
      }

      @include for-desktop-small-only {
        width: 60%;
      }

      @include for-tablet-only {
        width: 80%;
      }

      .overlay {
        position: absolute;
        background: #fff;
        color: black;
        width: 100%;
        min-height: 460px;
        transform: skewX(-18deg);
        left: -100px;
        border-radius: 15px;
        z-index: -1;
        overflow: hidden;
        @include for-phone-only {
          display: none;
        }
      }

      .content {
        position: relative;
        color: black;
        @include for-tablet-portrait-up {
          margin-top: 66px;
          margin-left: 142px;
        }
        text-align: left;
        @include for-phone-only {
          padding: 16px;
        }

        @include for-desktop-small-only {
          margin-left: 64px;
        }

        @include for-tablet-only {
          margin-left: 64px;
        }

        h2 {
          margin: 0;
          margin-left: -16px;
          font-weight: 800;
          font-size: 36px;
          letter-spacing: 0.125em;
          margin-bottom: 24px;

          @include for-phone-only {
            font-size: 22px;
            margin-left: 0;
            margin-bottom: 16px;
          }
        }

        ul {
          display: flex;
          flex-direction: column;
          max-height: 200px;
          flex-wrap: wrap;
          width: 420px;
          padding: 0;
          @include for-phone-only {
            padding-left: 16px;
            width: 350px;
          }

          li {
            max-width: 200px;
            margin: 0;
            text-align: left;
            font-weight: 600;
            font-size: 14px;
            margin-bottom: 4px;
            color: #111111;
          }
        }
      }

      .bottom {
        position: absolute;
        bottom: -8px;
      }
    }
    .right {
      width: 40%;
      height: 100%;
      position: relative;
      min-height: 460px;

      @include for-tablet-only {
        width: 20%;
      }

      @include for-phone-only {
        display: none;
      }

      .img {
        position: absolute;
        bottom: 0;
        right: -70px;
        transform: rotateY(180deg);

        @include for-tablet-only {
          right: 0;
          width: 200px;
        }
      }
    }
  }
}
</style>