import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Ceylon Cinnamon", price: 1200, desc: "Pure Ceylon cinnamon sticks." },
  { id: 2, name: "Black Pepper", price: 950, desc: "Strong and aromatic black pepper." },
  { id: 3, name: "Cloves", price: 1400, desc: "Premium quality cloves." },
];

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(id));

  const handleAddToCart = async () => {
    const success = await addToCart(product.id, 1);
    if (success) {
      alert(`${product.name} added to cart!`);
      navigate("/cart");
    }
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.desc}</p>
      <p>Price: Rs. {product.price}</p>

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
