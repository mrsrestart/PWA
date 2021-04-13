module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name : "ToDoApp",
    short_name : "ToDo App",
    themeColor: "#400082",

    manifestOptions: {
      "background_color": "#f69435",
      icons: [
        {
          src: "img/icons/icon-32.png",
          sizes: "32x32",
          type: "image/png"
        },
        {
          src: "img/icons/icon-16.png",
          sizes: "16x16",
          type: "image/png"
        },
        {
          src: "img/icons/icon-152x152.png",
          sizes: "152x152",
          type: "image/png"
        },
        {
          src: "img/icons/icon-144x144.png",
          sizes: "144x144",
          type: "image/png"
        }
      ]
    },

  }
}
