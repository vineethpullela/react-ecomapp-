import { Component } from "react";
import ProductsPage from "../../ecomapp/src/compoenents/ProductsPage";
import "./App.css";

class App extends Component {
  state = { productList: [] };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const url = "https://fakestoreapi.com/products";
    const options = {
      method: "GET",
    };

    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      const updatedData = data.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image,
      }));
      this.setState({ productList: updatedData });
    }
  };

  render() {
    const productList = this.state;

    return (
      <div className="app-container">
        <ProductsPage productList={productList} />
      </div>
    );
  }
}

export default App;
