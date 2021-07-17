const app2 = Vue.createApp({
  name: "Application",
  data() {
    return {
      clientName: "Lawrence Burns",
      clientRole: "Investment Manager, Baillie Gifford & Co",
      clientComment: `Parallax Engine demonstrated their deep knowledge in applying AI to assist investment analysis. Their solution provided us with additional signals and thus a further perspective to company analysis to aid decision-making.`,
      clientImage: `assets/lawrence.svg`,
      index: 0,
    };
  },
  methods: {
    async next() {
      const fetchjson = await fetch("/scripts/data/clientComments.json");
      const res = await fetchjson.json();
      console.log(res.length);
      if (this.index < res.length - 1) {
        this.index += 1;
        this.clientName = res[this.index].name;
        this.clientRole = res[this.index].role;
        this.clientComment = res[this.index].comment;
        this.clientImage = res[this.index].image;
      }
    },
    async prev() {
      const fetchjson = await fetch("/scripts/data/clientComments.json");
      const res = await fetchjson.json();
      console.log(res.length);
      if (this.index > 0) {
        this.index -= 1;
        this.clientName = res[this.index].name;
        this.clientRole = res[this.index].role;
        this.clientComment = res[this.index].comment;
        this.clientImage = res[this.index].image;
      }
    },
  },
});
app2.mount("#vue2");
