<template>
  <div id="carousel">
    <div class="container">
      <div class="left">
        <!-- <img src="/icons/el_carousel.svg" /> -->
        <svg
          id="carousel-svg"
          width="379"
          height="280"
          viewBox="0 0 379 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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

        <div class="content">
          <h1>
            WE DESIGN
            YOUR COMFORT
          </h1>
          <hr />
          <p>
            Corporate, Workshop, Events, School, Hospital
            &amp; Hospitalty Uniforms
          </p>
        </div>
      </div>
      <div class="right">
        <div class="bg">
          <div class="container" :style="{'background-image':`url(${imgs[currentIndex]})`}">
            <img class="phone-only bgimg" :src="imgs[currentIndex]" alt />
            <img src="/icons/bottom_shape.svg" class="bottom-shape" />
            <div class="nav desktop-only" @click="slide" title="Next Image">
              <img src="/icons/ic_right.svg" />
            </div>
            <div class="nav-phone phone-only" @click="slide" title="Next Image">
              <img src="/icons/ic_right.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
export default {
  name: 'Carousel',
  data() {
    return {
      currentIndex: 0,
      imgs: [
        '/carousel/1.jpeg',
        '/carousel/2.jpeg',
        '/carousel/3.jpeg',
        '/carousel/4.jpeg',
        '/carousel/5.jpeg',
        '/carousel/6.jpeg',
        '/carousel/7.jpg',
        '/carousel/8.jpeg'
      ]
    }
  },
  mounted() {
    anime({
      targets: '#carousel-svg path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 3000,
      delay: function(el, i) {
        return i * 250
      },
      direction: 'forwards',
      loop: false
    })

    setInterval(() => {
      this.slide()
    }, 5000)
  },
  methods: {
    slide: function() {
      this.currentIndex == this.imgs.length - 1
        ? (this.currentIndex = 0)
        : this.currentIndex++
    }
  }
}
</script>

<style lang="scss" scopped>
#carousel {
  position: relative;
  width: 100%;
  .container {
    width: 100%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;

    @include for-tablet-portrait-up{
      height: 60vh;
    }

    @include for-desktop-up{
      height: 100vh;
    }

    .left {
      width: 45%;
      position: relative;

      @include for-phone-only {
        width: 100%;
        height: 100px;
        text-align: center;
      }

      @include for-desktop-small-only {
        width: 30%;
      }

      img,
      svg {
        position: absolute;
        bottom: 0;
        left: 0;

        @include for-phone-only {
          width: 100px;
        }
      }
      .content {
        @include for-desktop-up {
          margin-top: 126px;
          margin-left: 150px;
        }

        @include for-tablet-portrait-up {
          margin-top: 126px;
          margin-left: 150px;
        }

        @include for-tablet-only {
          margin-top: 126px;
          margin-left: 64px;
        }

        @include for-desktop-small-only{
          margin-left: 48px;
        }

        h1 {
          font-weight: 200;
          font-size: 48px;
          color: #ffffff;
          opacity: 0.6;

          @include for-phone-only {
            font-size: 24px;
            opacity: 1;
            margin-top: 16px;
          }

          @include for-desktop-small-only {
            font-size: 32px;
          }

          @include for-tablet-only {
            font-size: 32px;
          }
        }

        hr {
          border: 0.5px solid rgba(255, 255, 255, 0.315);
          width: 70%;
          @include for-phone-only {
            margin: 8px auto;
          }
        }

        p {
          color: $primary;
          margin-top: 11px;
          font-weight: 500;
          font-size: 18px;

          @include for-phone-only {
            font-size: 14px;
          }

          @include for-desktop-small-only {
            font-size: 16px;
          }

          @include for-tablet-only {
            font-size: 14px;
          }
        }
      }
    }
    .right {
      position: relative;
      border-radius: 15px;
      @include for-tablet-portrait-up {
        padding: 100px 0;
        padding-left: 100px;
        max-height: 540px;
        flex-grow: 1;
      }

      @include for-phone-only {
        width: 100%;
        height: 250px;
        margin-top: 32px;
      }

      @include for-tablet-only {
        padding-left: 0;
      }

      .bg {
        width: 100%;
        height: 100%;
        position: absolute;
        right: -150px;
        background: #fff;
        border-radius: 15px;
        transform: skewX(-18deg);
        overflow: hidden;

        @include for-phone-only {
          right: -50px;
        }

        @include for-tablet-only {
          right: -100px;
          transform: skewX(-12deg);
        }

        @include for-tablet-only {
          max-height: 400px;
        }

        .container {
          position: relative;
          width: 100%;
          height: 100%;
          background-size: contain;
          background-position: right bottom;
          background-repeat: no-repeat;
          transition: 1s ease all;

          @include for-tablet-only {
            max-height: 400px;
          }

          @include for-tablet-portrait-up {
            transform: skewX(18deg) translateX(-90px);
          }

          @include for-phone-only {
            // transform: skewX(18deg);
          }

          @include for-tablet-only {
            background-position:  30% 80%;
            transform: skewX(12deg) translateX(-90px);
          }

          .bgimg {
            transform: skewX(18deg);
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .bottom-shape {
            position: absolute;
            bottom: 0;
            left: 0;

            @include for-phone-only {
              bottom: -40px;
            }

            @include for-tablet-only{
              bottom: -20px;
            }
          }

          .nav {
            width: 93px;
            height: 93px;
            border-radius: 50%;
            border: 0.5px solid rgba(0, 0, 0, 0.432);
            background: #f0f0f0;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translate(0, -50%);
            transition: 0.3s ease all;
            cursor: pointer;

            @include for-tablet-only{
              right: -35px;
            }

            img {
              margin-left: 12px;
            }
          }

          .nav:hover {
            box-shadow: 0.5px 1px 8px rgba(0, 0, 0, 0.219);
          }

          .nav-phone {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            border: 0.5px solid rgba(0, 0, 0, 0.432);
            background: #f0f0f0;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translate(0, -50%) skewX(18deg);
            transition: 0.3s ease all;
            cursor: pointer;

            img {
              margin-left: 4px;
              width: 20px;
            }
          }

          .nav-phone:hover {
            box-shadow: 0.5px 1px 8px rgba(0, 0, 0, 0.219);
          }
        }
      }
    }
  }
}
</style>