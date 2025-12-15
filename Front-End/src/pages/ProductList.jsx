import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Ceylon Cinnamon", price: 1200 },
  { id: 2, name: "Black Pepper", price: 950 },
  { id: 3, name: "Cloves", price: 1400 },
];

function ProductList() {
  return (
    <div>
      <h2>Our Spices</h2>

      <div>
        {products.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h3>{p.name}</h3>
            <p>Rs. {p.price}</p>

            <Link to={`/products/${p.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
