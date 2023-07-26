import Product from "../Product";
import "./index.css";

const ProductsPage = (props) => {
  const { productList } = props;

  return (
    <ul className="products-list-container">
      {productList.map((each) => (
        <Product key={each.id} productData={each} />
      ))}
    </ul>
  );
};

export default ProductsPage;
