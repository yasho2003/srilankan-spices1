import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/useCart";
import { products } from "../data/products";

function ProductList() {
  const { addToCart } = useCart();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search") || "";

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = async (product) => {
    const success = await addToCart(product);
    if (success) {
      alert("Added to cart successfully!");
    } else {
      alert("Failed to add to cart.");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2.5rem', marginBottom: '30px' }}>
        {searchQuery ? `Search Results for "${searchQuery}"` : "Our Premium Spices"}
      </h2>

      {filteredProducts.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
          {filteredProducts.map((p) => (
            <div key={p.id} className="product-card" style={{ border: "1px solid #eee", padding: "20px", borderRadius: '12px', textAlign: 'center' }}>
              <img src={p.image} alt={p.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }} />
              <h3>{p.name}</h3>
              <p style={{ fontWeight: 'bold', color: '#C5A059' }}>Rs. {p.price}</p>

              <Link to={`/products/${p.id}`}>
                <button style={{ background: '#000', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }}>
                  View Details
                </button>
              </Link>
              <button
                onClick={() => handleAddToCart(p)}
                style={{ background: '#C5A059', color: '#000', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h3>No spices found matching your search.</h3>
          <p>Try searching for something else or browse our collection.</p>
          <Link to="/products" onClick={() => window.location.href = '/products'}>
            <button style={{ background: '#C5A059', color: '#000', border: 'none', padding: '10px 20px', borderRadius: '5px', marginTop: '20px' }}>
              Browse All Spices
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ProductList;
