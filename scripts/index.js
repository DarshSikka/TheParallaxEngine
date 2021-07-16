const Highlighted = document.querySelector(".picker");
const fullScreen = document.querySelector("img[mark=full]");
const data = {
  products: [
    { name: "Investment Management Suite", description: "des1.txt" },
    { name: "Lorem Ipsum", description: "des2.txt" },
    { name: "Dolor sit", description: "des3.txt" },
  ],
};

fullScreen.width = screen.width;
const app = Vue.createApp({
  name: "Application",
  data() {
    return {
      name: "Investment Management Suite",
      description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et`,
      index: 0,
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
      }
    },
  },
});
app.mount("#vueapp");
