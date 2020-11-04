module.exports = {
  // ...настройки других vue-cli плагинов...
  pwa: {
    name: "Weather App",
    themeColor: "#9accc8",
    msTileColor: "#9accc8",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",

    // настройки манифеста
    manifestOptions: {
      short_name: "Weather",
      background_color: "#9accc8",
      start_url: "./",
      display: "standalone",
    //   description: 'App to know weather anywhere',
      icons: [
        {
          src: "./img/icons/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "./img/icons/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      // ...другие настройки манифеста...
    },
    // // настройка workbox-плагина
    // workboxPluginMode: "InjectManifest",
    // workboxOptions: {
    //   // swSrc необходимо в режиме InjectManifest
    //   swSrc: "dev/sw.js",
    //   // ...другие настройки Workbox...
    // },
  },
};
