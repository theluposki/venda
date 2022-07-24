import { database } from "../database/populateData.js"
export const About = {
  template:
  `
  <div class="products">
    <h1 class="title">Produtos</h1>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <div class="i-header">
          <h3 class="i-title">{{ item.title }}</h3>
          <span>{{ item.subtitle }}</span>
        </div>
        <div class="i-main">
          <img :src="item.urlPhoto" alt="Imagem Produto"/>
        </div>
        <div class="i-footer">
          <button @click="upDetails(index)" class="btn-chevron">
            <i v-if="upOrDown" class="ai-chevron-down"></i>
            <i v-else class="ai-chevron-up"></i>
          </button>
        </div>
      </li>
    </ul>
  </div>
  `,
  data() {
    return {
      upOrDown: false,
      list: database.product
    }
  },
  methods: {
    upDetails(index) {
      const items = document.querySelectorAll(".i-footer")
      this.upOrDown = !this.upOrDown
      if(this.upOrDown) {
        console.log("Up", items[index]);
        items[index].classList.add("active-details")
        //.active-details
      } else {
        items[index].classList.remove("active-details")
      }

    }
  }
}
