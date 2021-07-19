const Highlighted = document.querySelector(".picker");
const fullScreen = document.querySelector("img[mark=full]");
const data = {
  products: [
    {
      name: "Investment Management Suite",
      description: "des1.txt",
      image: "image2.svg",
    },
    {
      name: "Lorem Ipsum",
      description: "des2.txt",
      image: "assets/lowcosts.svg",
    },
    {
      name: "Dolor sit",
      description: "des3.txt",
      image: "assets/safeandsecure.svg",
    },
  ],
};

fullScreen.width = 1280;
const app = Vue.createApp({
  name: "Application",
  data() {
    return {
      name: "Investment Management Suite",
      description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et`,
      index: 0,
      image: "image2.svg",
    };
  },
  methods: {
    async next() {
      if (this.index < data.products.length) {
        this.index++;
        console.log(this.index);
        this.name = data.products[this.index].name;
        const des = await (
          await fetch(`scripts/data/${data.products[this.index].description}`)
        ).text();
        const ndes = await des;
        this.description = ndes;
        this.image = data.products[this.index].image;
      }
    },
    async prev() {
      if (this.index != 0) {
        this.index--;
        console.log(this.index);
        this.name = data.products[this.index].name;
        const des = await (
          await fetch(`scripts/data/${data.products[this.index].description}`)
        ).text();
        const ndes = await des;
        this.description = ndes;
        this.image = data.products[this.index].image;
      }
    },
  },
});
app.mount("#vueapp");
