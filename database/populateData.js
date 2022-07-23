const loren = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

const urlImg1 = "https://cdn.pixabay.com/photo/2020/01/17/16/42/food-4773380_960_720.jpg"
const urlImg2 = "https://cdn.pixabay.com/photo/2016/10/21/23/33/stew-1759394_960_720.jpg"
const urlImg3 = "https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg"
const urlImg4 = "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_960_720.jpg"


export const database = {
  product: [
    {
      id: crypto.randomUUID(),
      title: "Arroz",
      subtitle: "com camarão estilo japônes.",
      urlPhoto: urlImg1,
      price: 10.99,
      desc: loren,
      score: 1,
      timestamp: Date.now()
    },
    {
      id: crypto.randomUUID(),
      title: "Moqueca",
      subtitle: "Peixe selecionado pelo chefe.",
      urlPhoto: urlImg2,
      price: 10.99,
      desc: loren,
      score: 1,
      timestamp: Date.now()
    },
    { id: crypto.randomUUID(),
      title: "Hamburguer",
      subtitle: "Carne com molho turff",
      urlPhoto: urlImg3,
      price: 10.99,
      desc: loren,
      score: 1,
      timestamp: Date.now()
    },
    {
      id: crypto.randomUUID(),
      title: "Pizza",
      subtitle: "Pizza Original Italiana.",
      urlPhoto: urlImg4,
      price: 10.99,
      desc: loren,
      score: 1,
      timestamp: Date.now()
    },
  ]
}
