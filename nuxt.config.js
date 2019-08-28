
export default {
  server:{
    port:3000,
    host: '0.0.0.0'
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Dressland Uniforms',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: `Dressland is Kolhapur's oldest and the most trusted brand providing uniforms for Corporate, Workshop, Events, School, Hospital & Hospitalty Sector.` }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'stylesheet', href:'https://fonts.googleapis.com/css?family=Exo:200,400,500,700&display=swap' },
      { rel:'stylesheet', href:'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
 plugins: ['~/plugins/scrollspy','~/plugins/vueInView'],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
   
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
    '@bazzite/nuxt-netlify',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-146573706-1'
  },
  netlify: { },
  sitemap:{
    hostname: 'https://www.dresslanduniforms.in',
  },
  styleResources: {
    scss: [
        'assets/styles/global.scss',
    ]
},
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
