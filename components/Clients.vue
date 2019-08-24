<template>
  <section id="section-clients">
    <div class="container">
      <div class="left">
        <div class="overlay">
           <img src="/icons/client_bottom.svg" class="bottom">
        </div>
        <div class="content">
          <h2>OUR CLIENTS</h2>
          <ul>
            <li v-for="client in clients" :key="client">{{client}}</li>
          </ul>
        </div>
       
      </div>
      <div class="right">
        <img src="/icons/el_carousel.svg" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ClientComponent',
  data() {
    return {
      clients: [
        'Sound Casting',
        'Gokul Milk Factory',
        'Sound Casting',
        'Gokul Milk Factory',
        'Sound Casting',
        'Gokul Milk Factory',
        'Sound Casting',
        'Gokul Milk Factory',
        'Sound Casting',
        'Gokul Milk Factory',
        'Sound Casting',
        'Gokul Milk Factory',
        'Sound Casting',
        'Gokul Milk Factory'
      ]
    }
  }
}
</script>

<style lang="scss" scopped>
#section-clients {
  position: relative;
  width: 100%;
  margin-top: 122px;
  margin-bottom: 96px;

  .container {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .left {
      width: 55%;
      height: 100%;
      position: relative;

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
      }

      .content {
        color: black;
        margin-top: 66px;
        margin-left: 142px;
        text-align: left;

        h2 {
          margin: 0;
          margin-left: -16px;
          font-weight: 800;
          font-size: 36px;
          letter-spacing: 0.125em;
          margin-bottom: 24px;
        }

        ul {
          display: flex;
          flex-direction: column;
          max-height: 200px;
          flex-wrap: wrap;
          width: 420px;
          padding: 0;

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

      .bottom{
        position: absolute;
        bottom: -8px;
      }
      
    }
    .right {
      width: 40%;
      height: 100%;
      position: relative;
      min-height: 460px;

      img {
        position: absolute;
        bottom: 0;
        right: 0;
        transform: rotateY(180deg);
      }
    }
  }
}
</style>