import "./index.css";

const Product = (props) => {
  const { productData } = props;
  const { image, title, price } = productData;

  return (
    <li className="product-item">
      <img src={image} alt={title} className="img" />
      <div>
        <p className="product-name">{title}</p>
        <p className="product-price">{price}</p>
      </div>
    </li>
  );
};

export default Product;
