<template>
  <div id="carousel">
    <div class="container">
      <div class="left">
        <img src="/icons/el_carousel.svg" />
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
        '/carousel/5.jpeg'
      ]
    }
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

    @include for-tablet-portrait-up {
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

      img {
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
        }

        hr {
          border: 0.5px solid rgba(255, 255, 255, 0.315);
          width: 70%;
          @include for-phone-only{
            margin: 8px auto;
          }
        }

        p {
          color: $primary;
          margin-top: 11px;
          font-weight: 500;
          font-size: 18px;

          @include for-phone-only{
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

        .container {
          position: relative;
          width: 100%;
          height: 100%;
          background-size: contain;
          background-position: right top;
          background-repeat: no-repeat;
          transition: 1s ease all;
          @include for-tablet-portrait-up {
            transform: skewX(18deg) translateX(-90px);
          }

          @include for-phone-only {
            // transform: skewX(18deg);
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