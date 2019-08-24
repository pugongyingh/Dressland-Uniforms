<template>
  <div id="about">
    <div class="content">
      <p>Dressland is Kolhapur's oldest and the most trusted brand.</p>
      <p
        class="primary"
      >The company was founded by Mr. Chunilal Satra in 1965 and then taken over by his son Mr. Piyush Satra in late 90's. We are operating in retail garment sector and uniforms since 1965. Being pioneers of the same in Kolhapur, has helped us expand this business and a vast client base under uniforms from diversified sectors which includes Schools, Corporate companies, Hospitality sector, Political events, Sporting events etc.</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scopped>
#about {
  position: relative;
  width: 100%;
  min-height: 88vh;
  text-align: center;

  @include for-phone-only{
    min-height: 77vh;
  }

  

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @include for-phone-only{
      width: 100%;
    }

    p {
      margin: 16px 0;
      font-weight: 500;
      font-size: 14px;
      text-align: center;
      letter-spacing: 0.05em;

      @include for-phone-only{
        width: 100%;
        text-align: center;
        padding: 0 24px;
        text-align: justify;
        letter-spacing: 0;
      }
    }
  }
}
</style>