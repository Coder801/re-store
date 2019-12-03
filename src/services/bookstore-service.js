export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "Some Name 1",
      author: "Some Author 1",
      description:
        "Aperiam, perferendis id quisquam aut voluptatem explicabo repellendus nulla mollitia tempora ipsum eos nemo suscipit obcaecati aliquid accusamus fuga, consequuntur facilis!",
      price: "509",
      image: "https://images-na.ssl-images-amazon.com/images/I/51ROdCfJpNL.jpg"
    },
    {
      id: 2,
      title: "Some Name 2",
      author: "Some Author 2",
      description:
        "Lorem ipsum dolor sit amet consectetur eos nemo suscipit obcaecati aliquid accusamus fuga, consequuntur facilis!",
      price: "249",
      image: "https://images-na.ssl-images-amazon.com/images/I/51ROdCfJpNL.jpg"
    },
    {
      id: 3,
      title: "Some Name 3",
      author: "Some Author 3",
      description:
        "Consequatur aperiam, perferendis id quisquam aut voluptatem explicabo repellendus nulla mollitia tempora ipsum eos nemo suscipit obcaecati aliquid accusamus fuga, consequuntur facilis!",
      price: "439",
      image: "https://images-na.ssl-images-amazon.com/images/I/51ROdCfJpNL.jpg"
    },
    {
      id: 4,
      title: "Some Name 4",
      author: "Some Author 4",
      description:
        "Aperiam nulla mollitia tempora ipsum eos nemo suscipit obcaecati aliquid accusamus fuga, consequuntur facilis!",
      price: "239",
      image: "https://images-na.ssl-images-amazon.com/images/I/51ROdCfJpNL.jpg"
    }
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
      }, 1000);
    });
  }
}
