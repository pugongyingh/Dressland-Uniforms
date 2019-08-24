<template>
  <div>
    <Toolbar/>
    <nuxt class="pages" />
    <Footer/>
  </div>
</template>
<script>
import Toolbar from '@/components/Toolbar'
import Footer from '@/components/Footer'
export default {
  name:"DresslandApp",
  components:{
    Toolbar,
    Footer
  },
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scopped>
html {
  font-family: 'Exo', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body{
  background: linear-gradient(180deg, #262626 0%, #000000 100%);
  color: #fff;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.pages{
  padding-top: 67px;
}

</style>
