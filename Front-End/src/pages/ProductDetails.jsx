import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Ceylon Cinnamon", price: 1200, desc: "Pure Ceylon cinnamon sticks." },
  { id: 2, name: "Black Pepper", price: 950, desc: "Strong and aromatic black pepper." },
  { id: 3, name: "Cloves", price: 1400, desc: "Premium quality cloves." },
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.desc}</p>
      <p>Price: Rs. {product.price}</p>

      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
