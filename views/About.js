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
        <div class="i-footer">-footer</div>
      </li>
    </ul>
  </div>
  `,
  data() {
    return {
      list: database.product
    }
  }
}
