<template>
  <div id="enquiry">
    <div class="card">
      <p class="start">Enquire Now:</p>
      <select @change="updateSelection">
        <option value disabled selected>Select Category</option>
        <option
          v-for="item in options"
          :selected="item==selection"
          :key="item"
          :value="item"
        >{{item}}</option>
      </select>
      <p>Select Sub Categories:</p>
      <div class="subTypes">
        <span v-if="!subCategories.length>0">Select Category First</span>
        <div class="subType" v-for="(category,index) in subCategories" :key="index">
          <h5
            @click="toggleSubType(category)"
            :class="[{'active':isSelected(category)}]"
            :title="` Click to select or deselect`"
          >{{category}}</h5>
        </div>
      </div>
      <input type="text" placeholder="Enter your name" v-model="name" />
      <input type="email" placeholder="Enter your email" v-model="email" />
      <div class="phone">
        <div class="box">
          <p>+91</p>
        </div>
        <input type="number" placeholder="Mobile number" v-model="phone" />
      </div>
      <button
        class="submit"
        title="submit"
        @click="submit"
        :disabled="loading==true"
        :class="[{'disable':loading}]"
      >Submit</button>
      <button class="close" title="close" @click="$emit('dismiss')">Close</button>
      <div class="loader" v-if="loading">
        <ScaleLoader />
      </div>
      <p class="message">{{message}}</p>
    </div>
  </div>
</template>

<script>
import { ScaleLoader } from '@saeris/vue-spinners'
export default {
  name: 'EnquiryModal',
  props: ['selectedType', 'subType'],
  components: {
    ScaleLoader
  },
  data() {
    return {
      options: [
        'Corporate Uniforms (Men & Women)',
        'Workshop Uniforms',
        'Event Uniforms',
        'School Uniforms',
        'Hospitality Uniforms',
        'Hospital Uniforms',
        'Accessories',
        'Customize'
      ],
      services: [
        {
          title: 'Corporate Uniforms (Men & Women)',
          img: '/services/corporate.jpeg',
          content: [
            'Shirts',
            'Trousers',
            'Blazers',
            'Waist Coats',
            'Ties',
            'Socks',
            'Sarees',
            'Kurtis',
            'Pants',
            'Scarfs'
          ]
        },
        {
          title: 'Workshop Uniforms',
          img: '/services/workshop.jpeg',
          content: ['Sweaters', 'Dungarees', 'Body Suits', 'Shirts', 'Trousers']
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
            'Blazers',
            'Shirts',
            'Trousers',
            'Half Pant',
            'Sweaters',
            'Dungarees',
            'T-Shirts',
            'Track Pants',
            'Pinafores',
            'Tops',
            'Skirts',
            'Frocks',
            'Ties',
            'Socks',
            'Belts',
            'Caps',
            'Bags'
          ]
        },
        {
          title: 'Hospitality Uniforms',
          img: '/services/hospitality.jpeg',
          content: [
            'Chef Uniforms',
            'Caps',
            'Waiter Uniforms',
            'Manager Uniforms',
            'Housekeeping Uniforms',
            'Blazers',
            'Waistcoat',
            'Security Uniforms'
          ]
        },
        {
          title: 'Hospital Uniforms',
          img: '/services/hospital.jpg',
          content: [
            'Doctor Uniforms',
            'Patient Uniforms',
            'Staff Uniforms',
            'Bed Linens'
          ]
        },
        {
          title: 'Accessories',
          img: '/services/accessories.jpg',
          content: ['Ties', 'Belts', 'Socks', 'Caps']
        },

        {
          title: 'Custom',
          img: '/services/custom.jpg',
          content: ['Custom Outfits As Per Requirements']
        }
      ],
      selection: null,
      name: '',
      email: '',
      phone: '',
      loading: false,
      message: '',
      subCategories:[],
      selectedSubCategories:[]

    }
  },
  mounted() {
    if (this.selectedType) {
      this.selection = this.selectedType
    }
    this.refreshSelection();
   
    
  },
  methods: {
    updateSelection: function() {
      this.selection = event.target.value;
      this.selectedSubCategories = [];
      this.refreshSelection();
    },
    submit: function() {
      this.message = ''
      if (
        this.isValid(this.name) &&
        this.isValid(this.email) &&
        this.isValid(this.phone) &&
        this.isValid(this.selection)
        
      ) {
        this.loading = true
        this.submitToServer()
          .then(() => {
            this.loading = false
            this.message =
              'We are happy to hear from you, we will contact you soon.'
            // setTimeout(() => {
            //   this.$emit('dismiss');
            // }, 1000);
          })
          .catch(err => {
            this.message = err
            this.loading = false
          })
      } else {
        this.message = 'Please fill all details.'
      }
    },
    submitToServer: function() {
      const data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        category: this.selection,
        subCategories: this.subCategories
      }
      return new Promise((resolve, reject) => {
        fetch(`.netlify/functions/Notify`, {
          method: 'POST',
          body: JSON.stringify(data)
        })
          .then(response => {
            resolve(response)
          })
          .catch(err => {
            console.log('error', err)
            reject(err)
          })
      })
    },
    isValid: function(val) {
      if (val == null || val == '') {
        return false
      } else {
        return true
      }
    },
    toggleSubType: function(subType) {
      if (this.isSelected(subType)) {
         this.selectedSubCategories = this.selectedSubCategories.filter((item)=> item != subType)
      }else{
        this.selectedSubCategories.push(subType)
      }
    },
    isSelected: function(subType) {
      return this.selectedSubCategories.includes(subType)
    },
    refreshSelection:function(){
       const item = this.services.find(item => item.title == this.selection)
      if (item) {
        this.subCategories = [ ...item.content];
      }
    }
  },
  computed: {
    
  }
}
</script>

<style lang="scss" scopped>
#enquiry {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.829);
  z-index: 1000;
  top: 0;
  left: 0;

  .card {
    width: 767px;
    border-radius: 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 16px 32px;
    color: black;
    height: auto;

    @include for-phone-only {
      height: auto;
      width: 300px;
      top: 45%;
    }

    @include for-tablet-only {
      width: 500px;
    }

    p,span{
      @include for-phone-only{
        font-size: 13px;
      }
    }

    .subTypes {
      display: flex;
      align-items: center;
      border: 0.5px solid rgba(0, 0, 0, 0.514);
      padding: 12px 0;
      border-radius: 7px;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 8px;
      

      h5 {
        margin: 4px;
        font-size: 14px;
        cursor: pointer;
        background: #f5f5f5;
        padding: 4px 6px;
        border-radius: 4px;
        box-sizing: border-box;
        font-weight: normal;
        transition: 0.2s ease all;
        border: 0.5px solid transparent;

        @include for-phone-only{
          font-size: 12px;
        }
      }

      h5:hover {
        border-color: $primary;
      }

      .active {
        background: $primary;
      }
    }

    .loader {
      width: 150px;
      height: 150px;
      background: $primary;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
    }

    .close {
      position: absolute;
      right: 0;
      top: -24px;
      background: transparent;
      color: #fff;
      text-transform: uppercase;
      border: none;
      cursor: pointer;
      opacity: 0.7;
    }

    .close:hover {
      opacity: 1;
    }

    input,
    select,
    option {
      display: block;
      width: 100%;
      margin: 16px auto;
      text-align: center;
      border: 0.5px solid rgba(0, 0, 0, 0.514);
      padding: 18px 0;
      border-radius: 7px;

      @include for-phone-only {
        padding: 8px 0;
        margin: 12px 0;
      }
    }

    select {
      text-align-last: center;
      background: #f5f5f5;
    }
    option {
      padding: 8px;
    }

    .phone {
      display: flex;
      align-items: center;
      border: 0.5px solid rgba(0, 0, 0, 0.514);
      padding: 18px 0;
      border-radius: 7px;
      position: relative;

      @include for-phone-only {
        padding: 8px 0;
        margin: 12px 0;
      }

      .box {
        width: 107px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        height: 100%;
        border-right: 0.5px solid rgba(0, 0, 0, 0.514);

        @include for-phone-only {
          width: 40px;
        }

        p {
          margin: 0;
          padding: 0;
          font-size: 13px;
        }
      }
      input {
        width: 100%;
        padding: 0;
        margin: 0;
        border: none;
      }
    }

    .submit {
      margin: 0 auto;
      display: block;
      margin-top: 25px;
      background: $primary;
      font-weight: 800;
      font-size: 18px;
      letter-spacing: 0.125em;
      color: #000000;
      text-transform: uppercase;
      border-radius: 49px;
      border: 1px solid black;
      padding: 8px 18px;
      cursor: pointer;

      @include for-phone-only {
        font-size: 14px;
        width: 100%;
        margin-top: 16px;
      }
    }

    .disable {
      opacity: 0.5;
      cursor: default;
    }

    .message {
      text-align: center;
      margin-top: 8px;
      font-size: 12px;

      @include for-phone-only {
        font-size: 12px;
        margin-top: 12px;
      }
    }
  }
}
</style>