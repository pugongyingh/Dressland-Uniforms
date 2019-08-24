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
            <img src="/icons/bottom_shape.svg" class="bottom-shape" />
            <div class="nav" @click="slide" title="Next Image">
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
    height: 100vh;
    overflow: hidden;

    .left {
      width: 45%;
      position: relative;

      img {
        position: absolute;
        bottom: 0;
        left: 0;
      }
      .content {
        margin-top: 126px;
        margin-left: 150px;

        h1 {
          font-weight: 200;
          font-size: 48px;
          color: #ffffff;
          opacity: 0.6;
        }

        hr {
          border: 0.5px solid rgba(255, 255, 255, 0.315);
          width: 70%;
        }

        p {
          color: $primary;
          margin-top: 11px;
          font-weight: 500;
          font-size: 18px;
          font-size: 18px;
        }
      }
    }
    .right {
      flex-grow: 1;
      position: relative;
      border-radius: 15px;
      padding: 100px 0;
      padding-left: 100px;
      max-height: 540px;

      .bg {
        width: 100%;
        height: 100%;
        position: absolute;
        right: -150px;
        background: #fff;
        border-radius: 15px;
        transform: skewX(-18deg);
        overflow: hidden;

        .container {
          position: relative;
          width: 100%;
          height: 100%;
          background-size: contain;
          background-position: right top;
          background-repeat: no-repeat;
          transition: 1s ease all;
          transform: skewX(18deg) translateX(-90px);
          .bottom-shape {
            position: absolute;
            bottom: 0;
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

            img{
              margin-left: 12px;
            }
          }

          .nav:hover{
            box-shadow: 0.5px 1px 8px rgba(0, 0, 0, 0.219);
          }


        }
      }
    }
  }
}
</style>