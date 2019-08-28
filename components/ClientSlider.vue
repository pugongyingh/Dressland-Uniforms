<template>
  <div id="client-slider">
    <h4>Clients</h4>
    <marquee> <span class="client" v-for="(client,index) in clients" :key="client+index" :class="[{'primary':index%2==0}]"  :duration="30">{{client}}</span></marquee>
  </div>
</template>

<script>
export default {
  name:"ClientsMarquee",
  components:{
  },
  data(){
    return{
        clients: [
          'Volkswagen, Kolhapur',
          'Ford Kolhapur',
          'Renault Kolhapur',
          'Unique Hyundai, Kolhapur',
          'Sambaragi Traders',
          'BNI Kolhapur',
          'Hotel Ramee Panchshill',
          'Kirnik Rain Water Harverster',
          'Optical Hut',
          'Shree Mahalaxmi Associates',
          'Maknet Industries',
          'Kolhapur Dental Associates',
          'The Speciality Dental & Implant Center',
          'Dr. D. Y. Patil Shantiniketan School, Kolhapur'
      ],
    }
  }
}
</script>

<style lang="scss" scopped>
#client-slider{
  position: relative;
  width: 100%;
  background: rgb(31, 31, 31);
  color: #fff;
  margin: 48px 0;
  padding: 16px 0;
  h4{
    text-align: center;
    font-size: 24px;
    margin-bottom: 16px;
  }

  span{
    margin: 0 8px;
  }

  
}
</style>