import { Link, useLocation } from "react-router-dom";

const products = [
  { id: 1, name: "Ceylon Cinnamon Sticks (කුරුඳු) 100g", price: 2000, image: "https://images.unsplash.com/photo-1587131782738-de30ea91a542?q=80&w=880&auto=format&fit=crop" },
  { id: 2, name: "Black Pepper seed (ගම්මිරිස් ඇට) 100g", price: 1000, image: "https://images.unsplash.com/photo-1596483547432-613d96929972?q=80&w=880&auto=format&fit=crop" },
  { id: 3, name: "Clove (කරාබුනැටි) 100g", price: 1400, image: "https://images.unsplash.com/photo-1563284560-eb0df734d619?q=80&w=880&auto=format&fit=crop" },
  { id: 4, name: "Cardamom (කරදමුංගු) 100g", price: 1500, image: "https://images.unsplash.com/photo-1578848773950-8b1b3699c27d?q=80&w=880&auto=format&fit=crop" },
  { id: 5, name: "Fennel (මහදුරු) 100g", price: 1600, image: "https://images.unsplash.com/photo-1615485925769-1c5c79375e2f?q=80&w=880&auto=format&fit=crop" },
  { id: 6, name: "Ginger (ඉඟුරු) 100g", price: 1200, image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=880&auto=format&fit=crop" },
  { id: 7, name: "Mustard (අබ) 100g", price: 1800, image: "https://images.unsplash.com/photo-1518977676000-4b361e38b0e8?q=80&w=880&auto=format&fit=crop" },
  { id: 8, name: "Turmeric powder (කහ කුඩු) 100g", price: 1900, image: "https://images.unsplash.com/photo-1615485500704-8e99099d830c?q=80&w=880&auto=format&fit=crop" },
  { id: 9, name: "Garam Masala (ගරම් මසාලා) 100g", price: 2000, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=880&auto=format&fit=crop" },
  { id: 10, name: "Coriander (කොත්තමල්ලි) 100g", price: 2000, image: "https://images.unsplash.com/photo-1558961363-5696d5573489?q=80&w=880&auto=format&fit=crop" },
  { id: 11, name: "Cumin (සූදුරු) 100g", price: 1800, image: "https://images.unsplash.com/photo-1615485925769-1c5c79375e2f?q=80&w=880&auto=format&fit=crop" },
  { id: 12, name: "Chilli Flakes (කෑලි මිරිස්) 100g", price: 1500, image: "https://images.unsplash.com/photo-1588636906646-c0c534433543?q=80&w=880&auto=format&fit=crop" },
  { id: 13, name: "Nutmeg (සාදික්කා) 100g", price: 2400, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=880&auto=format&fit=crop" },
  { id: 14, name: "Fenugreek (උලුහාල්) 100g", price: 2200, image: "https://images.unsplash.com/photo-1615485925769-1c5c79375e2f?q=80&w=880&auto=format&fit=crop" },
  { id: 15, name: "Chilli Powder (මිරිස් කුඩු) 100g", price: 1800, image: "https://images.unsplash.com/photo-1588636906646-c0c534433543?q=80&w=880&auto=format&fit=crop" },
  { id: 16, name: "Black Pepper powder (ගම්මිරිස් කුඩු) 100g", price: 1200, image: "https://images.unsplash.com/photo-1596483547432-613d96929972?q=80&w=880&auto=format&fit=crop" },
  { id: 17, name: "Curry Leaves Powder (කරපිංචා කුඩු) 100g", price: 1800, image: "https://images.unsplash.com/photo-1628189873339-382a931c8309?q=80&w=880&auto=format&fit=crop" },
  { id: 18, name: "Cylon Cinnamon Powder (කුරුඳු කුඩු) 100g", price: 2500, image: "https://images.unsplash.com/photo-1587131782738-de30ea91a542?q=80&w=880&auto=format&fit=crop" },
  { id: 19, name: "Mustard Cream (අබ ක්‍රීම්) 100g", price: 2000, image: "https://images.unsplash.com/photo-1518977676000-4b361e38b0e8?q=80&w=880&auto=format&fit=crop" },
  { id: 20, name: "Star Anise (බුරියානිමල්) 100g", price: 3100, image: "https://images.unsplash.com/photo-1599940824399-b87987ced72a?q=80&w=880&auto=format&fit=crop" },
];

function ProductList() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search") || "";

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                <button style={{ background: '#000', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
                  View Details
                </button>
              </Link>
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
