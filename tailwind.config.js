module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#328CC1",
        "custom-gold": "#D9B310",
        "custom-brown":"#f8f5f0",
        "purssian-blue":"#0B3C5D",
        "custom-black":"#1D2731",
      },
      backgroundImage: {
        'hero-v1-img': "url('http://wahabali.com/work/pearl-demo/imgs/sub-banner-hotel.jpg')",
        'faq-img': "url('https://androthemes.com/themes/html/miranda/assets/img/room-cta-gallery/bg.jpg')",
      },
      fontFamily:{
        'font-raleway':['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [
  ],
};
