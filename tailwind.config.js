module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#002FA8",
        "custom-orange": "#f37800",
        "custom-dark": "#333333",
        "custom-beige":"#fbf4ef",
        "custom-gold": "#D9B310",
        "custom-brown":"#f8f5f0",
        "purssian-blue":"#0B3C5D",
        "custom-black":"#1D2731",
      },
      backgroundImage: {
        'faq-img': "url('https://androthemes.com/themes/html/miranda/assets/img/room-cta-gallery/bg.jpg')",
        'footer-dark':"url('https://htmldemo.zcubethemes.com/riorelax/img/bg/footer-bg.png')"
      },
      fontFamily:{
        'font-raleway':['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [
  ],
};
