import { database } from "../database/populateData.js"
export const About = {
  template:
  `
  <div class="products">
    <ul>
      <h1>Produtos</h1>

      <li v-for="(item, index) in list" :key="index">
        <div class="i-header">-header</div>
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
