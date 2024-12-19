import "./Card.css";
type Product = {
  id: number;
  img: string;
  brand: string;
  detail: string;
  price: string;
  type: string;
};
const Card = ({ product }: { product: Product }) => {
  return (
    <div className="card">
      <p>{product.brand}</p>
      <img src={product.img} alt="" />
      <p>{product.detail}</p>
      <p>{product.price}</p>
      <p>{product.type}</p>
    </div>
  );
};

export default Card;
