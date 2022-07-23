import { database } from "../database/populateData.js"
export const About = {
  template:
  `
  <div class="about">
    <ul>
      <h1>About</h1>

      <li v-for="(item, index) in list" :key="index">
        {{ item }}
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
